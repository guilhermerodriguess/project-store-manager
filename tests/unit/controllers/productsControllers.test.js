const control = require('../../../controllers/productsControl');
const service = require('../../../services/productsService');
const sinon = require('sinon');
const { expect } = require('chai');


// Função getAllProducts:
describe('', () => {

  describe('', () => {

  })
  describe('', () => {

  })
})

// Função getById:
describe('quando a função é chamada', () => {

  describe('mas não tem id correspondente no banco', () => {
    const req = {};
    const res = {};
    const next = sinon.spy();
    const erro = {
      status: 404,
      message: 'Product not found',
    };

    beforeEach(() => {
      req.params = 2;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'getById').throws(erro);
    })

    afterEach(() => {
      service.getById.restore();
    })

    it('é passado um erro no next', async () => {
      await control.getById(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
  // describe('', () => {

  //   const req = {};
  //   const res = {};
  //   const next = sinon.spy();


  //   beforeEach(() => {
  //     req.params = 2;
  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub().returns();
  //     sinon.stub(service, 'getById').resolves(data)
  //   })

  //   afterEach(() => {
  //     service.getById.restore();
  //   })

  //   it('', () => {

  //   })
  // })
})

//Função addProducts:

describe('quando a função é chamada', () => {

  describe('mas já existe um nome idêntico no banco', () => {
    const req = {};
    const res = {};
    const next = sinon.spy();
    const erro = {
      status: 400,
      message: 'Product already exists',
    };

    beforeEach(() => {
      req.body = 'Rafaella';
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'addProducts').throws(erro);
    })

    afterEach(() => {
      service.addProducts.restore();
    })

    it('é passado um erro no next', async () => {
      await control.addProducts(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
}) 

  // Funcão update:
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
      req.params = 5;
      req.body = 'bola';
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'updateProduct').throws(erro);
    })

    afterEach(() => {
      service.updateProduct.restore();
    })

    it('é passado um erro no next', async () => {
      await control.updateProduct(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
})

// FUnção delete:

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
      req.params = 5;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'deleteProduct').throws(erro);
    })

    afterEach(() => {
      service.deleteProduct.restore();
    })

    it('é passado um erro no next', async () => {
      await control.deleteProduct(req, res, next);
      expect(next.calledWith(erro)).to.be.equal(true);
    })
  })
})
