import { polynomial } from './polynomial.js';
import { RootsOfUnity } from './rootsOfUnity.js'

let roots = new RootsOfUnity();

class aberth {

  constructor(poly, soln, stability = "low"){
    if (!soln) {
      soln = roots.perturbed(poly.degree);
    }
    this.poly = poly;
    this.soln = soln;
    this.stability = stability;
  }

  step: (()=>{
    if (stability == "low"){
      return lowStabilityStep;
    } else if (stability == "high") {
      return highStabilityStep;
    } else {
      mehStabilityStep;
    }
  })()
}
