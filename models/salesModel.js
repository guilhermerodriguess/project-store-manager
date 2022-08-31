const connection = require('../db/connection');

const registerSales = async (body) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [promise1] = await connection.execute(query);

  const query2 = 'SELECT MAX(id) as big FROM StoreManager.sales;';
  const q = 'INSERT INTO StoreManager.sales_products (sale_id,product_id,quantity) VALUES(?,?,?); ';

  await Promise.all((body.map(async (e) => {
    await connection.execute(q, [promise1.insertId, e.productId, e.quantity]);
  })));

  const [gettingValue] = await connection.execute(query2);

  return {
    id: gettingValue[0].big,
    itemsSold: body,
  };
};

const checkId = async () => {
  const query = 'SELECT id FROM StoreManager.products;';
  const [data] = await connection.execute(query);
  const sending = data.map((e) => e.id);
  return sending;
};

const allSales = async () => {
  const query = `SELECT s.id AS saleId, s.date AS date, 
  p.product_id AS productId,p.quantity AS quantity 
  FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products
  AS p ON s.id = p.sale_id ORDER BY saleId, productId;`;
  const [data] = await connection.execute(query);
  return data;
};

const checkIdFromParams = async (id) => {
  const query = 'SELECT id FROM StoreManager.sales WHERE id=?;';
  const [data] = await connection.execute(query, [id]);
  console.log(data);
  return data;
};

const allProductsById = async (id) => {
  const query = `SELECT s.date AS date,
    p.product_id AS productId, p.quantity AS quantity 
  FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products
  AS p ON s.id = p.sale_id WHERE id=? ORDER BY productId;`;
  const [data] = await connection.execute(query, [id]);
  return data;
};

module.exports = {
  registerSales,
  checkId,
  allSales,
  checkIdFromParams,
  allProductsById,
}; 