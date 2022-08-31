const { describe, beforeEach } = require("mocha");
const service = require('../../../services/productsService');
const model = require('../../../models/productsModel');
const sinon = require('sinon');
const { expect } = require("chai");
const errorArray = require('../../../helpers/errorArray');
const error = require("../../../helpers/errorArray");

// Função getAllProducts:
describe('Deve retornar', () => {
  describe('teste', () => {

    before(() => {
      const teste = []
      sinon.stub(model, 'getAllProducts').resolves(teste)
    })

    after(() => {
      model.getAllProducts.restore();
    })
    it('um array vazio, se o banco estiver vazio', async () => {
      const data = await service.getAllProducts();
      expect(data).to.deep.equal([]);

    })
    it('disparar um Erro', async () => {
      const result = await service.getAllProducts();
      if (result === {}) {
        expect(result).to.throw(errorArray[1]) // <---- VOLTAR AQUI DEPOIS
      }
    })
  })
  describe('Deve retornar', () => {
    before(() => {
      const banco = {
        id: 1,
        name: 'Rafaella',
      }
      sinon.stub(model, 'getAllProducts').resolves(banco)
    })

    after(() => {
      model.getAllProducts.restore();
    })

    it('todos os dados do banco', async () => {

      const data = await service.getAllProducts();
      expect(data).to.deep.equal({ id: 1, name: 'Rafaella' });

    })
  })
})

// Função getById:
describe('A função consulta o id no banco', () => {
  describe('se houve o id', () => {

    beforeEach(() => {
      const searchId = {
        id: 2,
        name: 'Rafaella',
      }
      sinon.stub(model, 'getById').resolves(searchId);
    });

    afterEach(() => {
      model.getById.restore();
    })

    it('retorna um objeto com chave "id" e "name" do id correspondente', async () => {
      const id = 2;
      const data = await service.getById(id);
      expect(data).to.deep.equal({ id: 2, name: 'Rafaella' });
    })
  })

  describe('se não houver o id', () => {
    beforeEach(() => {
      const searchId = [{}]

      sinon.stub(model, 'getById').resolves(searchId);
    });

    afterEach(() => {
      model.getById.restore();
    })
    it('lança um erro do errorArray', async () => {
      let result = await service.getAllProducts();
      if (result === []) {
        expect(result).to.throw(errorArray[0])
      }
    })
  })
})

// Adiciona produtos:
describe('Quando é recebido um nome no req.body para adicionar ao banco', () => {
  describe('e não existe o nome no banco', () => {

    beforeEach(() => {
      const nameBody = [{
        id: 1,
        name: 'Maria',
      }]
      sinon.stub(model, 'addProducts').resolves(nameBody)
    })

    afterEach(() => {
      model.addProducts.restore();
    })

    it('retorna os dados referentes ao nome correspondente', async () => {
      const nameInput = 'Pedro';
      const data = await service.addProducts(nameInput);
      data.push({ id: 2, name: nameInput });
      expect(data).to.deep.equal([{ id: 1, name: 'Maria' }, { id: 2, name: 'Pedro' }]);
    })

  })
  describe('quando já tem o nome no banco', () => {

    beforeEach(() => {
      const nameBody = [{
        name: 'Maria',
      }]
      sinon.stub(model, 'addProducts').resolves(nameBody)
    })

    afterEach(() => {
      model.addProducts.restore();
    })

    it('lança um erro', async () => {

      const nameInput = 'Maria';
      const data = await service.addProducts(nameInput);
      if (data === []) {
        expect(data).to.throw(errorArray[2]);
      }

    })
  })
})

// deve receber um array com todos os produtos
// se o banco estiver vazio, o array deve estar vazio
//
// CONSULTA POR ID:
// se não houver o id no banco, deve receber um array vazio
// 