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

const getByProductId = async (body) => {
  const query = 'SELECT id FROM StoreManager.products;';
  const [gettingIds] = await connection.execute(query);
  const comparar = gettingIds.map((vamos) => vamos.id);
  const teste = body.map((e) => e.productId);
  const r3 = teste.filter((e) => !comparar.includes(e));
  if (r3.length !== 0) return false;
};

module.exports = {
  registerSales,
  getByProductId,
}; 