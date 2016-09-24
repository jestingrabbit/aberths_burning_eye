import { complex } from './complex.js';

export class Polynomial {

  constructor(coefficients){
    if (coefficients === undefined){
      this.coefficients = [];
    } else {
      this.coefficients = coefficients;
    }
  }

  degree() {
    if (this.coefficients.length === 0){
      return -Infinity;
    } else {
      return this.coefficients.length - 1;
    }
  }

  hornerStep(z) { // ye olde ax^2 + bx + c = ((a)*x + b)*x + c <- fewer mults
    return function(value, coefficient){
      console.log(complex(z).constructor.name)
      return (complex(z)).mult(value).add(coefficient);
    };
  }

  evalAt(z) {
    return this.coefficients.reduce(this.hornerStep(z), 0);
  }

  D(z) {
    if (this.degree < 0) return []

    let derivative = this.coefficients.map((c, i) => {
      if (c.constructor.name === "Complex"){
        return c.mult(this.degree() - i);
      } else {
        return c * (this.degree() - i);
      }
    }).pop()
    return polynomial(derivative)
  }
}

var polynomial = function(...coefficients){
  return new Polynomial(coefficients.map(complex));
}

export { polynomial, Polynomial };
