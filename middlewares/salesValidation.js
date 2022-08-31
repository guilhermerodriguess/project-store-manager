const errorArray = require('../helpers/errorArray');

const salesValidation = (req, _res, next) => {
  const teste = req.body;
  teste.forEach((element) => {
    if (element.quantity <= 0) next(errorArray[7]);
    if (!element.quantity) next(errorArray[6]);
    if (!element.productId) next(errorArray[5]);
    next();
  });
};

module.exports = salesValidation; 