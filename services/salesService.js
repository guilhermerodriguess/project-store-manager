const model = require('../models/salesModel');
const errorArray = require('../helpers/errorArray');

// const productIdValidation = async (result) => {
//    await model.getByProductId(result);
//   // if (data === undefined) throw errorArray[0];
// };

const registerSales = async (body) => {
  // const teste = productIdValidation(body);
  // const kkk = body;
  const data = await model.getByProductId(body);
  if (data !== false) {
    const result = await model.registerSales(body);
    return result;
  }
  throw errorArray[0];
  // const result = await model.getByProductId(body);
  // // console.log(result);
  // if (result === undefined) throw errorArray[0];
  // body.forEach((element) => productIdValidation(element.productId));
};

module.exports = {
  registerSales,
}; 