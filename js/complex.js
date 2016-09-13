class complex {

  constructor(a, b, polar = false){
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

  add(z){
    return complex.new(this.re + z.re, this.img + z.img);
  }

  s_mult(x){
    return complex.new(this.re * x, this.img * x);
  }

  mult(z){ //consider M3 after reading the article.
    return complex.new(
      this.re * z.re - this.img * z.img,
      this.re * z.img + this.img * z.re
    );
  }

  mod2(){
    return this.re * this.re + this.img * this.img;
  }

  mod(){
    return Math.sqrt(this.mod2());
  }

  conj(){
    return complex.new(this.re, -this.img);
  }

  inv(){
    let invM2 = 1/(this.re * this.re + this.img * this.img);
    return complex.new(invM2 * this.re, invM2 * this.img);
    //return (this.conj()).s_mult(1/this.mod2()); has a lot more overhead.
  }

}
