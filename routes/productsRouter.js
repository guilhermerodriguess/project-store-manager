const { Router } = require('express');
const control = require('../controllers/productsControl');

const productsRouter = Router();

productsRouter.get('/', control.getAllProducts);
productsRouter.get('/:id', control.getById);
productsRouter.post('/', control.addProducts);

module.exports = {
  productsRouter,
}; 