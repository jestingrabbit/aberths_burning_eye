import { complex } from './complex.js';

/**
 * @classdesc a class for polynomials with complex coefficients but
 * not with any ring operations, just as differentiable functions
 */
class Polynomial {

  /**
   * @constructor
   *
   * @param  {Complex[]} coefficients - complex coeffs of the poly
   */
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

  /**
   * hornerStep - a static utility to evaluate a polynomial
   * at z using horners method
   *
   * @param  {Complex} z - where we evaluate the poly
   * @return {function}   description
   */
  static hornerStep(z) { // ye olde ax^2 + bx + c = ((a)*x + b)*x + c <- fewer mults
    /**
     * an anonymous function that does the poly evaluation at z
     *
     * @param  {Complex} value - the cumulative value that we're calculating
     * @param  {type} coefficient - one of the coefficients of the poly
     * @return {Complex} - the next step in the evaluation
     */
    return function(value, coefficient){
      return z.mult(value).add(coefficient);
    };
  }

  /**
   * evalAt - evaluates this at z
   *
   * @param  {Complex} z - where we evaluate the poly
   * @return {Complex} - the value of the poly at z
   */
  evalAt(z) {
    return this.coefficients.reduce(Polynomial.hornerStep(z), complex(0));
  }

  /**
   * D - calculates the derivative
   *
   * @return {Polynomial}  this'
   */
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
}


/**
 * polynomial - creates a Polynomial from a sequence of arguments
 *
 * @param  {(Complex|number)[]} coefficients - a sequence of numbers or Complex
 * @return {Polynomial} - the polynomial with coefficients as described.
 */
var polynomial = function(...coefficients){
  return new Polynomial(coefficients.map((x)=>complex(x))); //otherwise you get phantom args being passed.
};

export { polynomial, Polynomial };
