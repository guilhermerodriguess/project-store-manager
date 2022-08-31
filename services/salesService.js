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

const deleteSales = async (id) => {
  const data = await model.checkIdFromParams(id);
  if (data.length === 1) {
    const result = await model.deleteSales(id);
    return result;
  }
  throw errorArray[8];
};

const updateSales = async (data) => {
  const result = await model.updateSales(data);
  return result;
};

const verifyIdFromSales = async (data) => {
  const { id } = data;
  const result = await model.checkIdFromParams(id);
  if (result.length > 0) {
    const send = await updateSales(data);
    return send;
  }
  throw errorArray[8];
};
const verifyIdFromProducts = async (body) => {
  const { dataUpdate } = body;
  const data = await model.checkId();
  const get = dataUpdate.some((e) => !data.includes(e.productId));
  if (!get) {
    const result = await verifyIdFromSales(body);
    return result;
  }
  throw errorArray[0];
};

module.exports = {
  registerSales,
  allSales,
  allProductsById,
  deleteSales,
  updateSales,
  verifyIdFromProducts,
}; 