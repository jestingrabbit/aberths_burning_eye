// import { polynomial } from './polynomial.js'
import { RootsOfUnity } from './rootsOfUnity.js'
import { complex } from './complex.js'

let roots = new RootsOfUnity()

/**
 * @classdesc Something to solve a polynomical over the complex numbers.
 * It should calculate a solution at some juncture.
 */
class Aberth {

  /**
   * @constructor
   *
   * @param {Polynomial} poly - one of our polynomials
   * @param {Complex[]} guess - array of complex numbers, length the degree of poly
   * @param {string} stability - we're using the low stability Aberth version.
   */
  constructor(poly, guess, stability = "high"){
    if (!guess) {
      guess = roots.perturbed(poly.degree)
    }
    this.poly = poly
    this.guess = guess
    this.stability = stability

    this.step = this.highStabilityStep
  }

  highStabilityStep(){
    const sumsOfInversesOfDifferences = this.guess.map(
      (zi, i)=>(this.guess.map(
        (zj, j)=>{
          return (i == j) ? 0 : zi.sub(zj).inv()
        }).reduce((sum, val)=>(sum.add(val)), complex(0))
      )
    )

    this.guess = sumsOfInversesOfDifferences.map(
      (sum, i)=>{
        const zi = this.guess[i]
        const correction = this.newtonsCorrection(zi)
        return zi.sub(correction.div(complex(1).sub(correction.mult(sum))))
      }
    )
    return this.guess
  }

  newtonsCorrection(z){
    return this.poly.evalAt(z).div(this.poly.D().evalAt(z))
  }

  solve(tolerance = 0.000000000001){
    var unsolved = true
    while (unsolved) {
      const oldGuess = this.guess
      this.step()
      const newGuess = this.guess
      unsolved = oldGuess
        .map((zi, i)=>{
          return zi.sub(newGuess[i]).mod() > tolerance
        })
        .filter((x)=>x).length
    }
    return this.guess
  }
}

export { Aberth }
