/**
 * @classdesc the complex numbers and their basic arithmetic
 */
class Complex {

  /**
   * @constructor
   *
   * @param {Number} a - a number, the real part, or the modulus
   * @param {Number} b - a number, the imaginary part, or the argument
   * @param {Boolean} [polar=false] - a flag to determine how to read the arguments
   */
  constructor(a = 1, b = 0, polar = false){
    //consider having re + im || r + arg, and fill them in as you need them...
    let re, im;

    if (polar){
      re = a * Math.cos(b);
      im = a * Math.sin(b);
    } else {
      re = a;
      im = b;
    }
    this.re = re;
    this.im = im;
  }

  /**
   * scalarAdd - adds a Number to this
   *
   * @param {Number} x - a number to be added
   * @return {Complex} the sum of x and this
   */
  scalarAdd(x){
    return new Complex(this.re + x, this.im);
  }

  /**
   * complexAdd - adds a Complex to this
   *
   * @param {Complex} z - a complex number to be added
   * @return {Complex} the sum of z and this
   */
  complexAdd(z){
    return new Complex(this.re + z.re, this.im + z.im);
  }

  /**
   * add - adds a complex or number to this
   *
   * @param {(Number|Complex)} a - a complex or number to be added
   * @return {Complex} the sum of a and this
   */
  add(a){
    if (a.constructor.name === "Complex") {
      return this.complexAdd(a);
    } else {
      return this.scalarAdd(a);
    }
  }

  /**
   * scalarSub - subtract x from this
   *
   * @param {Number} x - a number to be subtracted
   * @return {Complex} - this-a
   */
  scalarSub(x){
    return new Complex(this.re - x, this.im);
  }

  /**
   * complexSub - subtract z from this
   *
   * @param {Number} z - a complex to be subtracted
   * @return {Complex} - this-z
   */
  complexSub(z){
    return new Complex(this.re - z.re, this.im - z.im);
  }

  /**
   * sub - subtract a complex or number from this
   *
   * @param {(Number|Complex)} a - a complex or number to be subtracted
   * @return {Complex} - this-a
   */
  sub(a){
    if (a.constructor.name === "Complex") {
      return this.complexSub(a);
    } else {
      return this.scalarSub(a);
    }
  }

  /**
   * scalarMult - multiply by a plain number
   *
   * @param  {Number} x - a number to multiply this by
   * @return {Complex}  - this*x
   */
  scalarMult(x){
    return new Complex(this.re * x, this.im * x);
  }

  /**
   * complexMult - multiply this by a complex
   *
   * @param  {Complex} z - a complex number to multiply by
   * @return {Complex}   - this*z
   */
  complexMult(z){ //consider M3 after reading the article.
    return new Complex(
      this.re * z.re - this.im * z.im,
      this.re * z.im + this.im * z.re
    );
  }

  /**
   * mult - multiply this by a complex or number
   *
   * @param  {(Complex|Number)} a - a complex or number to multiply by
   * @return {Complex}   - this*a
   */
  mult(a){
    if (a.constructor.name === "Complex") {
      return this.complexMult(a);
    } else {
      return this.scalarMult(a);
    }
  }

  /**
   * mod2 - the modulus of this squared
   *
   * @return {Number} >0
   */
  mod2(){
    return this.re * this.re + this.im * this.im;
  }

  /**
   * mod - the modulus of the number
   *
   * @return {Number}  >0
   */
  mod(){
    return Math.sqrt(this.mod2());
  }

  /**
   * conj - the conjugate
   *
   * @return {Complex}  usually denoted \bar{z}
   */
  conj(){
    return new Complex(this.re, -this.im);
  }

  /**
   * inv - the inverse of this
   *
   * @return {Complex}  should explode on 0
   */
  inv(){
    let invM2 = 1/(this.re * this.re + this.im * this.im);
    return new Complex(invM2 * this.re, -invM2 * this.im);
    //return (this.conj()).s_mult(1/this.mod2()); has a lot more overhead.
  }

  /**
   * scalarDiv - divide this by a number.
   *
   * @param  {Number} x the divisor
   * @return {Complex}  this/x
   */
  scalarDiv(x){
    return new Complex(this.re/x, this.im/x);
  }

  /**
   * complexDiv - divide this by z
   *
   * @param  {Complex} z the divisor
   * @return {Complex}   this/z
   */
  complexDiv(z){
    let invM2z = 1/(z.im * z.im + z.re * z.re);
    return new Complex(
      invM2z * (this.re * z.re + this.im * z.im),
      invM2z * (this.im * z.re - this.re * z.im)
    );
    // return this.mult(z.inv());
  }

  /**
   * div - divide this by a
   *
   * @param  {(Complex|Number)} a - the divisor
   * @return {Complex}   this/a
   */
  div(a){
    if (a.constructor.name === "Complex") {
      return this.complexDiv(a);
    } else {
      return this.scalarDiv(a);
    }
  }

  /**
   * toString - an implementation of toString, for niceness.
   *
   * @return {string}  prettiness is useful at times.
   */
  toString(){
    return this.re + " + i*" + this.im;
  }
}


/**
 * var - a factory - can take a complex.
 *
 * @param  {(Complex|Number)} a - either a complex or real part or modulus
 * @param  {Number} [b = 0]     - either imaginary part or argument
 * @param  {Boolean} [polar = false] - whether the coords are polar or rectilinear
 * @return {Complex}  the complex number described.
 */
var complex = function(a, b = 0, polar = false){
  if (a.constructor.name === "Complex") {
    return a;
  }
  return new Complex(a, b, polar);
};

export { Complex, complex };
