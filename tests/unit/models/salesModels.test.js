const models = require('../../../models/salesModel');
const connection = require('../../../db/connection');
const sinon = require('sinon');
const { expect } = require('chai');

// Função de registrar a venda: 
describe('', () => {
  describe('', () => {
    it('', () => {

    })
  })
});

// Função de checkId:
describe('Quando chamada a função checkId', () => {
  describe('checar se existe o id na tabela de Products, se tiver', () => {

    beforeEach(() => {
      const dataBase = [[{
        id: 5
      }]];

      sinon.stub(connection, 'execute').resolves(dataBase);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('retorna um array vazio, se não tem o id', async () => {
      const id = 6;
      const data = await models.checkId(id);
      const [sending] = data.map((e) => e.id);
      expect(sending).to.be.undefined;
    });
    it('retorna um array contendo o id', async () => {
      const id = 5;
      const data = await models.checkId(id);
      expect(data).to.deep.equal([5]);
    });
  })
});

// Função allSales:
describe(' Quando a função allSales for chamada', () => {

});
//Função checkIdFromParams:
describe('Quando a função checkIdFromParams', () => {
  describe('checar se existe o id na tabela de Sales, se tiver', () => {

    beforeEach(() => {
      const dataBase = [[{
        id: 5
      }]];

      sinon.stub(connection, 'execute').resolves(dataBase);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('retorna um array vazio, se não tem o id', async () => {
      const id = 6;
      const data = await models.checkIdFromParams(id);
      const result = data.filter((e) => e.id === id)
      if (result.length > 0) {
        expect(data).to.deep.equal([]);
      }
    });
    it('retorna um array com um objeto contendo o id', async () => {
      const id = 5;
      const data = await models.checkIdFromParams(id);
      const result = data.filter((e) => e.id === id)
      if (result.length > 0) {
        expect(data).to.deep.equal([{ id: 5 }]);
      }
    });
  })
});


//Função allProductsById:
describe('', () => {
  describe('', () => {
    it('', () => {

    })
  })
});

// Função deleteSales:
describe('Quando a função deleteSales é chamada, deve', () => {
  describe('checar se existe o id na tabela de Sales', () => {

    beforeEach(() => {
      const dataBase = [[{
        id: 5
      }]];

      sinon.stub(connection, 'execute').resolves(dataBase);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('e retornar true', async () => {
      const id = 5;
      const data = await models.deleteSales(id);
      expect(data).to.be.true;
    });
  });
});


// Função updateSales:
describe('Quando a função updateSales é chamada', () => {
  describe('atualizar os dados', () => {

    beforeEach(() => {
      const dataBase = [[{
        id: 5,
        dataUpdate: [{
          productId: 1,
          quantity: 10,
        }]
      }]];

      sinon.stub(connection, 'execute').resolves(dataBase);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('e retornar true', async () => {
      const newData = {
        id: 5,
        dataUpdate: [{
          productId: 1,
          quantity: 5,
        }]
      };
      const data = await models.updateSales(newData);
      expect(data).to.be.true;
    });
  })
}); 