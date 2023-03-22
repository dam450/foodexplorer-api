const { Router } = require('express');

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  response.status(201).json({ ...request.body });
});

module.exports = usersRoutes;
