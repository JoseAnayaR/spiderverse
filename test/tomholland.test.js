const spiderman = require('./../app/spiderman')
describe("Unit test for tom holland getInfo()", () => {
    test('2) Use the method getInfo()', () => {
      //Aqui escribo el codigo que quiero usar tal cual
      //Quiero poder instanciar un objeto spiderman con esta informacion
      const tomHolland = new spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      
      //Valido que el código funcione
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
      
    });
  })