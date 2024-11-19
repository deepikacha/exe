const express = require('express');
const path = require('path');
const fs = require('fs');
const rootDir = require('../util/path');

const router = express.Router();

// Serve the home.html file and messages when "/" is accessed
router.get('/', (req, res, next) => {
  const filePath = path.join(rootDir, 'data', 'messages.json');

  fs.readFile(filePath, (err, fileData) => {
    let messages = [];
    if (!err && fileData.length > 0) {
      messages = JSON.parse(fileData); // Parse messages if file exists
    }

    // Render the HTML dynamically with messages
    const messageList = messages
      .map(
        (msg) => `<li><strong>${msg.username}:</strong> ${msg.message}</li>`
      )
      .join('');
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
        <h1>Send Message</h1>
        <form id="message-form" action="/send-message" method="POST">
          <input type="hidden" name="username" id="username"> <!-- Hidden input for username -->
          <label for="message">Message:</label>
          <input type="text" name="message" id="message">
          <button type="submit">Send</button>
        </form>
        <h2>Messages</h2>
        <ul>
          ${messageList || '<li>No messages yet!</li>'}
        </ul>
        <script>
          document.addEventListener('DOMContentLoaded', function () {
            const username = localStorage.getItem('username');
            if (username) {
              alert(\`Welcome, \${username}!\`);
              document.getElementById('username').value = username; // Populate hidden input with username
            } else {
              alert('Please log in first!');
              window.location.href = '/login'; // Redirect to login if username is not found
            }
          });
        </script>
      </body>
      </html>`;
    res.send(html); // Send the dynamic HTML
  });
});

// Handle POST request to save messages
router.post('/send-message', (req, res, next) => {
  const username = req.body.username; // Retrieve username from request body
  const message = req.body.message; // Retrieve message from request body

  if (username && message) {
    const data = { username, message };
    const filePath = path.join(rootDir, 'data', 'messages.json');

    // Append the message to the file
    fs.readFile(filePath, (err, fileData) => {
      let messages = [];
      if (!err && fileData.length > 0) {
        messages = JSON.parse(fileData); // Parse existing messages if the file exists
      }
      messages.push(data); // Add the new message
      fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          res.status(500).send('<h1>Internal Server Error</h1>');
        } else {
          console.log('Message saved successfully!');
          res.redirect('/'); // Redirect back to the home page
        }
      });
    });
  } else {
    res.status(400).send('<h1>Error: Username and message are required!</h1>');
  }
});

module.exports = router;
