const connection = require('../db/connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [data] = await connection.execute(query, [id]);
  return data[0];
};

const addProducts = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [data] = await connection.execute(query, [name]);
  return { id: data.insertId, name };
};

const getByName = async (name) => {
  const query = 'SELECT name FROM StoreManager.products WHERE name=?';
  const [data] = await connection.execute(query, [name]);
  return data;
};

module.exports = {
  getAllProducts,
  getById,
  addProducts,
  getByName,
}; 