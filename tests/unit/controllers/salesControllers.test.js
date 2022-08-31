const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../services/salesService');
const control = require('../../../controllers/salesControl');

// Função registerSales: 

describe('quando a função é chamada', () => {
  describe('mas já existe um nome idêntico no banco', () => {
    const req = {};
    const res = {};
    const next = sinon.spy();
    const erro = {
      status: 404,
      message: 'Product not found',
    };

    beforeEach(() => {
      req.body = [
        {
          "productId": 10,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'registerSales').throws(erro);
    })

    afterEach(() => {
      service.registerSales.restore();
    })

    it('é passado um erro no next', async () => {
      await control.registerSales(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
}) 