require('express-async-errors');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { appErrorMiddleware } = require('./utils/AppError');
const uploadConfig = require('./configs/upload');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(appErrorMiddleware);
app.use('/files', express.static(uploadConfig.UPLOAD_FOLDER));

app.listen(PORT, function () {
  console.log(`[Server] listening on port ${PORT}`);
});
