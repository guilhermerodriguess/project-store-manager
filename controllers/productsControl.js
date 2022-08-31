const service = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  try {
    const data = await service.getAllProducts();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).end();
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.getById(id);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const addProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await service.addProducts(name);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getById,
  addProducts,
}; 