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
  // const queryReturnId = 'SELECT COUNT(id) FROM StoreManager.sales;';
  // const promise3 = await connection.execute(queryReturnId);
};

const getByProductId = async (body) => {
  const query = 'SELECT id FROM StoreManager.products;';
  const [gettingIds] = await connection.execute(query);
  const comparar = gettingIds.map((vamos) => vamos.id);
  const teste = body.map((e) => e.productId);
  const r3 = teste.filter((e) => !comparar.includes(e));
  if (r3.length !== 0) return false;
  // return false;
};

// body.filter((e) => {
//   if (!comparar.includes(e.productId)) return 1;
//   return e;
// });
// const r3 = teste.filter((e) => !comparar.includes(e));
// console.log(teste);

// console.log(r3);

// return r3;

// for (let index = 0; index < teste.length; index += 1) {
//   if (Number(teste[index]) !== Number(comparar[index])) {
//     return false;
//   } return body; 
// }

// const testando = comparar.join();

// if (teste !== []) return undefined;
// return body;

module.exports = {
  registerSales,
  getByProductId,
}; 