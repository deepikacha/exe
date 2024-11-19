const express = require('express');
const path = require('path');
const rootDir = require('../util/path'); // Utility for the root path

const router = express.Router();

// Handle GET request to "/login"
router.get('/login', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'login.html')); // Serve the login.html file
});

// Handle POST request to "/login"
router.post('/login', (req, res, next) => {
  const username = req.body.username; // Retrieve the username from the form submission
  if (username) {
    console.log(`Username received: ${username}`); // Log the username
    res.redirect('/'); // Redirect to the homepage
  } else {
    res.status(400).send('<h1>Error: Username is required!</h1>'); // Handle missing username
  }
});

module.exports = router;
