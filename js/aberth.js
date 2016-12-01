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
    const triangle = Array.from({length: this.poly.degree},
      (_, i)=>Array.from({length: i},
        (__, j)=>[i, j]
      )
    );
    const inversesOfDifferences = triangle.map(
      ([i, j])=>(1/(this.soln[i] - this.soln[j]))
    );
    const rowSums = inversesOfDifferences.map(
      (a)=>(a.reduce((x, y)=>(x+y), 0))
    );
    const colSums = Array.from({length: this.poly.degree},
      (_, i)=>(Array.from({length: this.poly.degree - 1 - i},
        (__, j)=>(inversesOfDifferences[j+i+1][i])).reduce((a, b)=>(a+b), 0)
      )
    );
    return Array.from({length: this.poly.degree},
      (_, i)=>(rowSums[i] + colSums[i])
    );
  }






}

export { Aberth }
