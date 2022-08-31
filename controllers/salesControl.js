const service = require('../services/salesService');

const registerSales = async (req, res, next) => {
  try {
    const data = await service.registerSales(req.body);
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerSales,
}; 