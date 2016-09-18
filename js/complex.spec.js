import Complex from './complex.js';
import {default as complex} from './complex.js';

test("Complex creates instances", () => {
  const complex_one = new Complex();
  expect(complex_one.constructor.name).toBe("Complex");
});

test("factory creates Complex", () => {
  const z = complex(1, 1);
  expect(z.constructor.name).toBe("Complex");
});

test("does complex multiplication", () => {
  const z = (complex(1, 2)).mult(complex(3, 4));
  expect(z).toEqual(complex(-5, 10))
});

test("i*i = -1", () => {
  const z = (complex(0, 1)).mult(complex(0, 1));
  expect(z).toEqual(complex(-1, 0));
});
