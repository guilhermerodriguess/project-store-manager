const service = require('../services/productsService');

const getAllProducts = async (_req, res, next) => {
  try {
    const data = await service.getAllProducts();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
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

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await service.updateProduct({ id, name });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.deleteProduct(id);
    if (data) return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getBySearch = async (req, res, next) => {
  try {
    const productSearch = req.query.q;
    const data = await service.getBySearch(productSearch);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getById,
  addProducts,
  updateProduct,
  deleteProduct,
  getBySearch,
}; 