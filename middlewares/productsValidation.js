const errorArray = require('../helpers/errorArray');

const productsValidation = (req, _res, next) => {
  const { name } = req.body;
  if (!name) next(errorArray[3]);
  if (name.length < 5) next(errorArray[4]);
  next();
};

module.exports = productsValidation;