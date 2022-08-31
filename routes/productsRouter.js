const { Router } = require('express');
const control = require('../controllers/productsControl');

const productsRouter = Router();

productsRouter.get('/', control.getAll);
productsRouter.get('/:id', control.getById);

module.exports = {
  productsRouter,
}; 