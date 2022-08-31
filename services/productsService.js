const model = require('../models/productsModel');

const getAllProducts = async () => {
  const data = await model.getAllProducts();
  return data;
};

const getById = async (id) => {
  const data = await model.getById(id);
  return data;
};

module.exports = {
  getAllProducts,
  getById,
};