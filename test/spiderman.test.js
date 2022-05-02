const spiderman = require('./../app/spiderman')
describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //Aqui escribo el codigo que quiero usar tal cual
      //Quiero poder instanciar un objeto spiderman con esta informacion
      const andrewGarfield = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
      //Valido que el código funcione
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.numberOfMovies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
  })