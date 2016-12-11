import { complex } from './complex.js';

let twoPi = 2*Math.PI;


/**
 * @classdesc A bag for all the roots of unity, or those rotated by a random bit
 * probably wont get much use in the usual run of things
 */
class RootsOfUnity {

  /**
   * @constructor
   */
  constructor(){
    this._roots = {1: [complex(1)]};
  }

  /**
   * get - returns an array of the nth roots of 1
   *
   * @param  {number} n - which roots we want
   * @return {Complex[]}   an array of the roots
   */
  get(n){
    if (!(this._roots[n])){
      this._roots[n] = Array
        .from(new Array(n),
          (_, i) => Math.floor(n/2) - i )
        .map( i => complex(1, i*twoPi/n, true) );
    }
    return this._roots[n];
  }

  /**
   * perturbed - the nth roots randomly perturbed by the same amount
   *
   * @param  {type} n description
   * @return {type}   description
   */
  perturbed(n){
    const roots = this.get(n);
    const rand = twoPi*Math.random()/n;
    const perturbance = complex(1, rand, true);
    return roots.map( r => r.mult(perturbance) );
  }
}

export { RootsOfUnity };
