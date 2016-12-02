class Complex {

  constructor(a = 1, b = 0, polar = false){
    //consider having re + img || r + arg, and fill them in as you need them...
    let re, img;

    if (polar){
      re = a * Math.cos(b);
      img = a * Math.sin(b);
    } else {
      re = a;
      img = b;
    }
    this.re = re;
    this.img = img;
  }

  scalarAdd(x){
    return new Complex(this.re + x, this.img);
  }

  complexAdd(z){
    return new Complex(this.re + z.re, this.img + z.img);
  }

  add(a){
    if (a.constructor.name === "Complex") {
      return this.complexAdd(a);
    } else {
      return this.scalarAdd(a);
    }
  }

  scalarSub(x){
    return new Complex(this.re - x, this.img);
  }

  complexSub(z){
    return new Complex(this.re - z.re, this.img - z.img);
  }

  sub(a){
    if (a.constructor.name === "Complex") {
      return this.complexSub(a);
    } else {
      return this.scalarSub(a);
    }
  }

  scalarMult(x){
    return new Complex(this.re * x, this.img * x);
  }

  complexMult(z){ //consider M3 after reading the article.
    return new Complex(
      this.re * z.re - this.img * z.img,
      this.re * z.img + this.img * z.re
    );
  }

  mult(a){
    if (a.constructor.name === "Complex") {
      return this.complexMult(a);
    } else {
      return this.scalarMult(a);
    }
  }

  mod2(){
    return this.re * this.re + this.img * this.img;
  }

  mod(){
    return Math.sqrt(this.mod2());
  }

  conj(){
    return new Complex(this.re, -this.img);
  }

  inv(){
    let invM2 = 1/(this.re * this.re + this.img * this.img);
    return new Complex(invM2 * this.re, invM2 * this.img);
    //return (this.conj()).s_mult(1/this.mod2()); has a lot more overhead.
  }

  scalarDiv(x){
    return new Complex(this.re/x, this.img/x);
  }

  complexDiv(z){
    return this.mult(z.inv());
    // less overhead is possible, but see how this goes.
  }

  div(a){
    if (a.constructor.name === "Complex") {
      return this.complexDiv(a);
    } else {
      return this.scalarDiv(a);
    }
  }

  toString(){
    return this.re + " + i*" + this.img;
  }
}

var complex = function(a, b = 0, polar = false){
  if (a.constructor.name === "Complex") {
    return a;
  }
  return new Complex(a, b, polar);
};

export { Complex, complex };
