const { Router } = require('express');
const CategoriesController = require('../controllers/CategoriesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const categoriesRoutes = Router();
const categoriesController = new CategoriesController();


categoriesRoutes.get('/', ensureAuthenticated, categoriesController.index);
categoriesRoutes.post('/', ensureAuthenticated, categoriesController.create);

module.exports = categoriesRoutes;
