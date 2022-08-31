const { Router } = require('express');
const control = require('../controllers/productsControl');
const productsValidation = require('../middlewares/productsValidation');

const productsRouter = Router();

productsRouter.get('/', control.getAllProducts);
productsRouter.get('/:id', control.getById);
productsRouter.post('/', productsValidation, control.addProducts);

module.exports = {
  productsRouter,
}; 