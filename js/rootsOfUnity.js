import { complex } from './complex.js';

let twoPi = 2*Math.PI;

class RootsOfUnity {

  construction(){
    this.roots = {1: [complex(1)]};
  }

  get(n){
    if (!(this.roots[n])){
      this.roots[n] = Array
        .from(new Array(n),
          (_, i) => Math.floor(n/2) - i )
        .map( i => complex(1, i*twoPi/n, true) );
    }
    return this.roots[n];
  }

  perturbed(n){
    const roots = this.get(n);
    const rand = twoPi*Math.random()/n;
    const perturbance = complex(1, rand, true);
    return roots.map( r => r.mult(perturbance) );
  }
}

export { RootsOfUnity };
