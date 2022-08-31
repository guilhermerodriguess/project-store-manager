const service = require('../services/salesService');

const registerSales = async (req, res, next) => {
  try {
    const data = await service.registerSales(req.body);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const allSales = async (_req, res, next) => {
  try {
    const data = await service.allSales();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const allProductsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.allProductsById(id);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.deleteSales(id);
    if (data) return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerSales,
  allSales,
  allProductsById,
  deleteSales,
}; 