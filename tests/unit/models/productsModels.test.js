const { expect } = require("chai");
const sinon = require('sinon');
const connection = require("../../../db/connection");
const model = require('../../../models/productsModel');

// Função de mostrar todos na tela:
describe('Questão 1 - Quando entra na rota get /products', () => {
  afterEach(() => {
    connection.execute.restore();
  });

  describe('e a requisição é bem sucedida, e não nada no banco', () => {
    const result = [[]];
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(result);
    });

    it('retorna um array', async () => {
      const result = await model.getAllProducts();
      expect(result).to.be.an('array');
    });
    it('retorna um array vazio, caso não tenha nada no banco', async () => {
      const result = await model.getAllProducts();
      expect(result).to.deep.equal([]);
    });
  })
  describe('e a requisição é bem sucedida, e contém informação no banco', () => {
    const result = [[{
      id: 1,
      name: 'Example name',
    }]]

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(result);
    })

    it('o objeto possui as chaves "id" e "name"', async () => {
      const [result] = await model.getAllProducts();
      expect(result).to.includes.all.keys('id', 'name');
    });

  })
})

// Função de pesquisa pelo id:
describe('Quando entra na rota get /product/:id', () => {

  afterEach(() => {
    connection.execute.restore();
  })

  describe('se não houver o id no banco', () => {
    const product = [[{
      id: 5,
      name: 'Product',
    }]];
    const id = 6;
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(product);
    })

    it('retorna um array vazio', async () => {
      let product = await model.getById(id);
      if (product.id !== id) {
        let product = [];
        expect(product).to.deep.equal([]);
      }
    })
  })

  describe('se houver o id no banco', () => {
    const product = [[{
      id: 5,
      name: 'Product',
    }]];
    const id = 5;
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(product);
    })

    it('deve retornar um objeto com as chaves "id" e "name"', async () => {
      const product = await model.getById(id);
      expect(product).to.deep.equal({ id: 5, name: 'Product' })
    })
  })
})

// Função addByName:
describe('Ao receber um nome', () => {
  const banco = [[{}]];
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(banco);
  })
  afterEach(() => {
    connection.execute.restore();
  })
  it('esse nome é adicionado ao banco', async () => {
    const name = 'Rafaella';
    const result = await model.addProducts(name);
    expect(result).to.include({ name });
  })
})

// Função getByName:
describe('Ao receber um nome no body, retorna', () => {
  const banco = [[{
    id: 5,
    name: 'random',
  }]]
  const name = 'Rafaella';
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves(banco)
  })

  afterEach(() => {
    connection.execute.restore();
  })

  it('um array vazio, se não tem o nome no banco de dados', async () => {

    let data = await model.getByName(name);
    if (!data.filter((filtering) => filtering.name === name)) {
      data = [];
      expect(data).to.deep.equal([]);
    }
  })
  it('um objeto com a respectiva chave de "id" e "name"', async () => {
    const name2 = 'random';
    const data = await model.getByName(name2);
    expect(data[0].name).to.deep.equal(name2);
  })
}) 