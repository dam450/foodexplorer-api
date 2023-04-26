const { Router } = require('express');
const multer = require('multer');

const DishesController = require('../controllers/DishesController');
const DishPictureController = require('../controllers/DishPictureController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const uploadConfig = require('../configs/upload');

const dishesRoutes = Router();
const dishesController = new DishesController();
const dishPictureController = new DishPictureController();
const upload = multer(uploadConfig.MULTER)

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post('/', dishesController.create);
dishesRoutes.put('/:id', dishesController.update);
dishesRoutes.get('/:id', dishesController.show);
dishesRoutes.get('/', dishesController.index);

dishesRoutes.patch('/:id/picture',
  ensureAuthenticated,
  upload.single('picture'),
  dishPictureController.updatePicture
)

module.exports = dishesRoutes;
