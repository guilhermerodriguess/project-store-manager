const errorArray = require('../helpers/errorArray');

const salesValidation = (req, _res, next) => {
  const product = req.body;
  const map1 = product.some((e) => e.quantity <= 0);
  const map2 = product.some((e) => !e.quantity);
  const map3 = product.some((e) => !e.productId);

  if (map1) {
    next(errorArray[7]);
  } else if (map2) {
    next(errorArray[6]);
  } else if (map3) {
    next(errorArray[5]);
  }
  next();
};

module.exports = salesValidation; 