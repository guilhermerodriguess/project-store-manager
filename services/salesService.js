const model = require('../models/salesModel');
const errorArray = require('../helpers/errorArray');

const registerSales = async (body) => {
  const data = await model.checkId();
  const get = body.some((e) => !data.includes(e.productId));
  if (get) {
    throw errorArray[0];
  } else {
    const result = await model.registerSales(body);
    return result;
  }
};

module.exports = {
  registerSales,
}; 