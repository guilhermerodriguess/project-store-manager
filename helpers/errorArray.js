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
];

module.exports = error; 