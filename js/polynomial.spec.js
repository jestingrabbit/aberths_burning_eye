import Polynomial from './polynomial.js';
import {default as polynomial} from './polynomial.js';

describe("Polynomial", () => {
  it("creates instances of the right class", () => {
    const p = new Polynomial();
    expect(p.constructor.name).toBe("Polynomial");
  });

  it("has a factory that creates Polynomial", () => {
    const p = polynomial(1, 1);
    expect(p.constructor.name).toBe("Polynomial");
  });

  // test("does complex multiplication", () => {
  //   const z = (complex(1, 2)).mult(complex(3, 4));
  //   expect(z).toEqual(complex(-5, 10))
  // });
  //
  // test("i*i = -1", () => {
  //   const z = (complex(0, 1)).mult(complex(0, 1));
  //   expect(z).toBe(complex(0, -1));
  // });
});
