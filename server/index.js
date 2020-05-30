require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const db = require('./database')

const server = express();

server.use(staticMiddleware);
server.use(express.json());

server.get('/api/server-check', (req, res) => {
  return res.status(200).json({ success: 'The server is working' });
});

// Test students table
server.get('/api/students', (req, res) => {
  const SQL = `SELECT * from "students"`;

  db.query(SQL)
    .then(result => res.json(result.rows))
});

server.listen(process.env.PORT, () => {
  console.log('Server is listening on port', process.env.PORT);
});
