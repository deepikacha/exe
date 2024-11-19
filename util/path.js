// util/path.js
const path = require('path');

// Get the absolute path of the project root
module.exports = path.dirname(require.main.filename);
