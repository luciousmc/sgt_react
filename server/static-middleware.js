const path = require('path');
const express = require('express');

const publicFolder = path.join(__dirname + 'public/');
const staticMiddleware = express.static(publicFolder);

module.exports = staticMiddleware;