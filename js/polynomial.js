import { complex } from './complex.js';

export class Polynomial {

  constructor(coefficients){
    if (coefficients === undefined){
      this.coefficients = [];
    } else {
      this.coefficients = coefficients;
    }
    if (this.coefficients.length === 0){
      this.degree = -Infinity;
    } else {
      this.degree = this.coefficients.length - 1;
    }
  }

  static hornerStep(z) { // ye olde ax^2 + bx + c = ((a)*x + b)*x + c <- fewer mults
    return function(value, coefficient){
      return z.mult(value).add(coefficient);
    };
  }

  evalAt(z) {
    return this.coefficients.reduce(Polynomial.hornerStep(z), complex(0));
  }

  D() {
    if (this._D != undefined){ return this._D }

    if (this.degree < 0){
      return this;
    }
    let derivative = this.coefficients.map((c, i) => {
      return c.mult(this.degree - i);
    });
    derivative.pop();

    this._D = new Polynomial(derivative)
    return this._D;
  }

  // newton()
}

var polynomial = function(...coefficients){
  return new Polynomial(coefficients.map((x)=>complex(x))); //otherwise you get phantom args being passed.
};

export { polynomial, Polynomial };
