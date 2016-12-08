import { Complex, complex } from './complex.js';

test("Complex creates instances", () => {
  const complex_one = new Complex();
  expect(complex_one.constructor.name).toBe("Complex");
});

test("factory creates Complex", () => {
  const z = complex(1, 1);
  expect(z.constructor.name).toBe("Complex");
});

test("responds to polar inputs", () => {
  const z = complex(1, Math.PI/2, true);
  expect(z.constructor.name).toBe("Complex");
  expect(Math.log2(z.re)).toBeLessThan(-53); //precision of of 64 bit IEEE 754
  expect(z.img).toEqual(1);
});

test("does complex addition", () => {
  const z = (complex(1, 2)).add(3);
  expect(z).toEqual(complex(4, 2));
  const w = (complex(1, 2)).add(complex(3, 4));
  expect(w).toEqual(complex(4, 6));
});

test("does complex subtraction", () => {
  const z = (complex(1, 2)).sub(3);
  expect(z).toEqual(complex(-2, 2));
  const w = (complex(1, 2)).sub(complex(3, 4));
  expect(w).toEqual(complex(-2, -2));
});

test("does complex multiplication", () => {
  const w = (complex(1, 2)).mult(3);
  expect(w).toEqual(complex(3, 6));
  const z = (complex(1, 2)).mult(complex(3, 4));
  expect(z).toEqual(complex(-5, 10));
});

test("i*i = -1", () => {
  const z = (complex(0, 1)).mult(complex(0, 1));
  expect(z).toEqual(complex(-1, 0));
});

test("complex is idempotent", ()=> {
  const a = complex(1);
  const b = complex(complex(1));
  expect(a).toEqual(b);
})
