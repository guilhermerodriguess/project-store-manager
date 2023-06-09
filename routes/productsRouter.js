const { Router } = require('express');
const control = require('../controllers/productsControl');
const productsValidation = require('../middlewares/productsValidation');

const productsRouter = Router();

productsRouter.get('/search', control.getBySearch);
productsRouter.get('/', control.getAllProducts);
productsRouter.get('/:id', control.getById);
productsRouter.delete('/:id', control.deleteProduct);
productsRouter.put('/:id', productsValidation, control.updateProduct);
productsRouter.post('/', productsValidation, control.addProducts);

module.exports = {
  productsRouter,
}; 