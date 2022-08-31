// const Joi = require('joi');
const errorArray = require('../helpers/errorArray');

// const products = Joi.object({
//   name: Joi.string().min(5).required(),
// });

// const productsValidation = (req, res, next) => {
//   const { name } = req.body;
//   const { error } = products.validate(name);
//   if (error.string.require) next(errorArray[3]);
// };

const productsValidation = (req, _res, next) => {
  const { name } = req.body;
  if (!name) next(errorArray[3]);
  if (name.length < 5) next(errorArray[4]);
  next();
};

module.exports = productsValidation;