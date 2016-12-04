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

    // if (this.stability == "low"){
      this.step = this.lowStabilityStep;
    // } else if (this.stability == "high") {
    //   this.step = Aberth.highStabilityStep;
    // } else {
    //   this.step = Aberth.mehStabilityStep;
    // }
  }

  lowStabilityStep(){
    this.soln = this.sumsOfInversesOfDifferences().map(
      (sum, i)=>{
        const zi = this.soln[i];
        return sum.sub(this.inverseNewtonsCorrection(zi)).inv().add(zi);
      }
    );
    return this.soln;
  }

  newtonsCorrection(z){
    return this.poly.evalAt(z).div(this.poly.D().evalAt(z));
  }

  inverseNewtonsCorrection(z){
    return this.poly.D().evalAt(z).div(this.poly.evalAt(z));
  }

  sumsOfInversesOfDifferences(){
    const inversesOfDifferences = this.soln.map(
      (zi, i)=>(this.soln.slice(0, i).map(
        (zj)=>(zi.sub(zj).inv())
      ))
    )
    const rowSums = inversesOfDifferences.map(
      (a)=>(a.reduce((x, y)=>(x.sum(y)), 0))
    );
    const colSums = Array.from({length: this.poly.degree},
      (_, i)=>(Array.from({length: this.poly.degree - 1 - i},
        (__, j)=>(inversesOfDifferences[j+i+1][i])).reduce((a, b)=>(a.sum(b)), 0)
      )
    );
    return Array.from({length: this.poly.degree},
      (_, i)=>(colSums[i].sub(rowSums[i]))
    );
  }
}

export { Aberth }
