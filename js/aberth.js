// import { polynomial } from './polynomial.js';
import { RootsOfUnity } from './rootsOfUnity.js'

let roots = new RootsOfUnity();

class Aberth {

  constructor(poly, soln, stability = "low"){
    if (!soln) {
      soln = roots.perturbed(poly.degree);
    }
    this.poly = poly;
    this.soln = soln;
    this.stability = stability;

    if (this.stability == "low"){
      this.step = Aberth.lowStabilityStep;
    } else if (this.stability == "high") {
      this.step = Aberth.highStabilityStep;
    } else {
      this.step = Aberth.mehStabilityStep;
    }
  }

  lowStabilityStep(){

  }

  newtonsCorrection(z){
    return this.poly.evalAt(z)/this.poly.D().evalAt(z);
  }

  inverseNewtonsCorrection(z){
    return this.poly.D().evalAt(z)/this.poly.evalAt(z);
  }

  sumsOfInversesOfDifferences(){
    let matrix = Array.from({length: this.poly.degree},
      (_, i)=>Array.from({length: this.poly.degree},
        (__, j)=>[i, j]));
    matrix.map(([i,j])=>)
  }






}

export { Aberth }
