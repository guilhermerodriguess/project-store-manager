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

const allSales = async () => {
  const data = await model.allSales();
  return data;
};

const allProductsById = async (id) => {
  const data = await model.checkIdFromParams(id);
  if (data.length === 1) {
    const result = await model.allProductsById(id);
    return result;
  }
  throw errorArray[8];
};

module.exports = {
  registerSales,
  allSales,
  allProductsById,
}; 