const { Router } = require('express');
const usersRoutes = require('./users.routes');
const sessionsRoutes = require('./sessions.routes');
const dishesRoutes = require('./dishes.routes');
const filesRoutes = require('./files.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/dishes', dishesRoutes);
routes.use('/files', filesRoutes);

module.exports = routes;
