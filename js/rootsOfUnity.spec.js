import { RootsOfUnity } from '././rootsOfUnity.js';
import { complex } from './complex.js';

describe("RootsOfUnity", () => {
  it("has a constructor", () => {
    const roots = new RootsOfUnity();
    expect(roots.constructor.name).toEqual("RootsOfUnity");
  })
})
