const { Router } = require('express');
const salesValidation = require('../middlewares/salesValidation');
const control = require('../controllers/salesControl');

const salesRoutes = Router();

salesRoutes.post('/', salesValidation, control.registerSales);
salesRoutes.get('/', control.allSales);
salesRoutes.get('/:id', control.allProductsById);


module.exports = salesRoutes; 