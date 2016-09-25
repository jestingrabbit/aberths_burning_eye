import { polynomial } from 'polynomial';

class aberth {

  constructor(p){
    this.poly = p
    this.soln = Array.from(new Array(5), (_, i) => i)
      .map((i)=> complex(1, ))
  }

  solution(){return polynomial();} // and suddenly I realise I need to make complex numbers.
                                  // and its wrong anyway...





}
