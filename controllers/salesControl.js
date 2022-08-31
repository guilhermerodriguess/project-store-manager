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

const updateSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const finalResult = {
      saleId: id,
      itemsUpdated: dataUpdate,
    };
    const data = await service.verifyIdFromProducts({ id, dataUpdate });
    if (data) return res.status(200).json(finalResult);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerSales,
  allSales,
  allProductsById,
  deleteSales,
  updateSales,
}; 