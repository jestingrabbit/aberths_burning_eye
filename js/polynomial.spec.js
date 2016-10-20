import { Polynomial, polynomial } from './polynomial.js';
import { complex } from './complex.js';

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
    const pZero = polynomial();

    it("gets the degree right", () =>{
      expect(pZero.degree()).toEqual(-Infinity);
    });

    it("evaluates at 0 to 0", () => {
      expect(pZero.evalAt(complex(0))).toEqual(complex(0));
    });

    it("evaluates at 3 + 4i to 0", () => {
      const z = complex(3, 4);
      expect(pZero.evalAt(z)).toEqual(complex(0));
    });

    it("D(0) = 0", () => {
      expect(pZero.D().coefficients).toEqual([]);
    })
  });

  describe("handles x^2 + 2x + 1", () =>{
    const p = polynomial(1, 2, 1);

    it("gets the degree right", () =>{
      expect(p.degree()).toEqual(2);
    });

    it("evaluates at 0 to 1", () => {
      expect(p.evalAt(complex(0))).toEqual(complex(1));
    });

    it("evaluates at 3 + 4i to 32i", () => {
      const z = complex(3, 4);
      expect(p.evalAt(z)).toEqual(complex(0, 32));
    });

    it("D(x^2 + 2x + 1) = 2x + 2", () => {
      expect(p.D().coefficients).toEqual([complex(2), complex(2)]);
    })

  });
});
