export class Polynomial {

  constructor(coefficients){
    this.coefficients = coefficients
  }

  degree() {
    return coefficients.length - 1;
  }

  hornerStep(z) {
    return function(value, coefficient){
      return z.mult(value).add(coefficient);
    };
  }

  evalAt(z) {
    return this.coefficients.reduce(hornerStep(z), 0);
  }

  D(z) {
    if (this.degree < 0) return []

    let derivative = this.coefficients.map(
      (c, i) => c * (this.degree() - i);
    )
    derivative.pop()
    return polynomial(derivative)
  }
}

var polynomial = function(coefficients){
  return new Polynomial(coefficients)
}

export default polynomial;
