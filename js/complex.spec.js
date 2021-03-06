import { Complex, complex } from './complex.js';

test("Complex creates instances", () => {
  const complex_one = new Complex();
  expect(complex_one.constructor.name).toBe("Complex");
});

test("factory creates Complex", () => {
  const z = complex(1, 1);
  expect(z.constructor.name).toBe("Complex");
});

test("has string representation", () => {
  const z = complex(3, 4);
  expect(z.toString()).toEqual("3 + 4i");
  const w = complex(3, -4);
  expect(w.toString()).toEqual("3 - 4i");
  const x = complex(3, 0);
  expect(x.toString()).toEqual("3");
});

test("responds to polar inputs", () => {
  const z = complex(1, Math.PI/2, true);
  expect(z.constructor.name).toBe("Complex");
  expect(Math.log2(z.re)).toBeLessThan(-53); //precision of of 64 bit IEEE 754
  expect(z.im).toEqual(1);
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

test("does complex division", () => {
  const w = (complex(1, 2)).div(3);
  expect(w).toEqual(complex(1/3, 2/3));
  const z = (complex(1, 2)).div(complex(3, 4));
  expect(z).toEqual(complex(11/25, 2/25));
});

test("does mod and mod2 right", () => {
  const z = (complex(3, 4));
  expect(z.mod()).toEqual(5);
  expect(z.mod2()).toEqual(25);
});

test("conjugates", () => {
  const z = complex(3, 4);
  expect(z.conj()).toEqual(complex(3, -4));
});

test("inverts", () => {
  const z = complex(3, 4);
  expect(z.conj().mult(1/z.mod2(z))).toEqual(z.inv());
  expect(z.inv().mult(z)).toEqual(complex(1));
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
