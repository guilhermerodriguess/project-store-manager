const model = require('../models/productsModel');
const errorArray = require('../helpers/errorArray');

const getAllProducts = async () => {
  const data = await model.getAllProducts();
  if (data) {
    return data;
  }
  throw errorArray[1];
};

const verifyData = (data) => {
  if (!data) {
    throw errorArray[0];
  }
};

const getById = async (id) => {
  const data = await model.getById(id);
  verifyData(data);
  return data;
};

const addProducts = async (name) => {
  const data1 = await model.getByName(name);
  const findName = data1.some((product) => product.name === name);
  console.log(findName);
  if (findName) {
    throw errorArray[2];
  } else {
    const data = await model.addProducts(name);
    return data;
  }
};

module.exports = {
  getAllProducts,
  getById,
  addProducts,
};