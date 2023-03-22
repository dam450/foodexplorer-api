require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(PORT, function () {
  console.log(`[Server] listening on port ${PORT} \thttp://localhost:${PORT}`);
});
