const { Router } = require('express');
const salesValidation = require('../middlewares/salesValidation');
const control = require('../controllers/salesControl');

const salesRoutes = Router();

salesRoutes.post('/', salesValidation, control.registerSales);
salesRoutes.get('/', control.allSales);
salesRoutes.get('/:id', control.allProductsById);
salesRoutes.delete('/:id', control.deleteSales);
salesRoutes.put('/:id', salesValidation, control.updateSales);

module.exports = salesRoutes; 