const service = require('../services/productsService');

const getAll = async (_req, res) => {
  try {
    const data = await service.getAllProducts();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).end();
    // return next('erro');
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await service.getById(id);
    if (data === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getAll,
  getById,
}; 