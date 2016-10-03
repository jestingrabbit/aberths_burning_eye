import { polynomial } from './polynomial.js';
import { RootsOfUnity } from './rootsOfUnity.js'

let roots = new RootsOfUnity();

class aberth {

  constructor(poly, soln){
    if (!soln) {
      soln = roots[poly.degree()];
    }
    this.poly = poly;
    this.soln = soln;
  }






}
