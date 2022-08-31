const error = [
  {
    status: 404,
    message: 'Product not found',
  },
  {
    status: 400,
    message: 'Error',
  },
  {
    status: 400,
    message: 'Product already exists',
  },
  {
    status: 400,
    message: '"name" is required',
  },
  {
    status: 422,
    message: '"name" length must be at least 5 characters long',
  },
  {
    status: 400,
    message: '"productId" is required',
  },
  {
    status: 400,
    message: '"quantity" is required',
  },
  {
    status: 422,
    message: '"quantity" must be greater than or equal to 1',
  },
];

module.exports = error; 