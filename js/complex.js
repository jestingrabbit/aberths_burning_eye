export class Complex {

  constructor(a=1, b=0, polar = false){
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

  toString(){
    return this.re + " + i*" + this.img;
  }
};

var complex = function(a, b, polar){
  return new Complex(a, b, polar);
};

var makeComplex = function(a){
  if(a.constructor.name = "Complex") {
    return a;
  } else if (a.constructor.name = "Number") {
    return complex(a, 0);
  } else {
    return null;
  }
}

export default complex;
