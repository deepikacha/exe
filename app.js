const express = require('express');
const bodyParser = require('body-parser');

const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/home');

const app = express();

// Middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: false }));

// Route handlers
app.use(loginRoutes); // Login routes
app.use(homeRoutes); // Home routes

// 404 error handler for unknown routes
app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

// Start server on port 4000
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
