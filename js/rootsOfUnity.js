import { Complex } from './complex.js';

let twoPi = 2*Math.PI;

class RootsOfUnity {
  construction(){
    this.roots = {1: [complex(1)]};
  }

  get(n){
    if (this.roots[n]) return this.roots[n];

    this.roots[n] = Array.from(new Array(5), (_, i) => i)
                     .map((i) => complex(1, i*twoPi/n, polar=true));
  }
}

let rootsOfUnity = function(n){
  return Array.from(new Array(5), (_, i) => i)
              .map((i)=> complex(1, i*twoPi/n, polar=true));
}
