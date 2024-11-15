const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read the message from the file (if it exists) to display it
        fs.readFile('message.txt', 'utf8', (err, data) => {
            let message = '';
            if (!err && data) {
                message = data;  // If message.txt exists, use its content
            }

            // Send the HTML form and the current message to the client
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write('<body>');
            res.write(`<h1>${message}</h1>`);  // Display the message here
            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message"><button type="submit">Send</button>');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();  // End the response after rendering the page
        });
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];  // Assuming 'message' is the name attribute of the input

            // Write the message to the file
            fs.writeFileSync('message.txt', message);

            // After writing to the file, redirect the user to '/'
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();  // End the response after redirect
        });
    }

   
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
