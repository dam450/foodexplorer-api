require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, function () {
  console.log(`[Server] listening on port ${PORT}`);
});
