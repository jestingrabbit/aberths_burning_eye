import Polynomial from './polynomial.js';
import {default as polynomial} from './polynomial.js';
import {default as complex} from './complex.js';

describe("Polynomial", () => {
  it("creates instances of the right class", () => {
    const p = new Polynomial();
    expect(p.constructor.name).toBe("Polynomial");
  });

  it("has a factory that creates Polynomial", () => {
    const p = polynomial(1, 1);
    expect(p.constructor.name).toBe("Polynomial");
  });

  describe("correctly handles the 0 polynomial", () => {
    it("gets the degree right", () =>{
      const pZero = polynomial();
      expect(pZero.degree()).toEqual(-Infinity);
    });
    it("evaluates at 0 to 0", () => {
      const pZero = polynomial();
      expect(pZero.evalAt(complex(0, 0))).toEqual(0);
    });
    it("evaluates at 3 + 4i to 0", () => {
      const pZero = polynomial();
      const z = complex(3, 4);
      expect(pZero.evalAt(z)).toEqual(0);
    });

    // expect(pZero.evalAt(1)).toEqual(0);
    // expect(pZero.evalAt(complex(3, 4))).toEqual(0);
  });
  //
  // test("i*i = -1", () => {
  //   const z = (complex(0, 1)).mult(complex(0, 1));
  //   expect(z).toBe(complex(0, -1));
  // });
});
