import { RootsOfUnity } from '././rootsOfUnity.js'
import { complex } from './complex.js'
const twoPi = 2*Math.PI

describe("RootsOfUnity", () => {
  it("has a constructor", () => {
    const roots = new RootsOfUnity()
    expect(roots.constructor.name).toEqual("RootsOfUnity")
  });

  it("includes 1", () => {
    const roots = new RootsOfUnity();
    const threeRoots = roots.get(3)
    expect(threeRoots.includes(complex(1)));
  })

  it("includes the obvious roots", () => {
    const roots = new RootsOfUnity()
    const sevenRoots = roots.get(7)
    expect(sevenRoots.includes(complex(1, twoPi/7, "polar")))
  })

  it("if n odd, excludes -1", () => {
    const roots = new RootsOfUnity()
    const sevenRoots = roots.get(7)
    expect(!sevenRoots.includes(complex(-1)))
  })

  it("doesn't recalculate", () => {
    const roots = new RootsOfUnity()
    const sevenRoots = roots.get(7)
    const otherSevenRoots = roots.get(7)
    expect(sevenRoots).toBe(otherSevenRoots)
  })

  it("can make perturbed roots", () => {
    const roots = new RootsOfUnity()
    const perturbed = roots.perturbed(10)
    expect(perturbed)
    expect(perturbed.length == 10)
    expect(!perturbed.includes(1))
  })
});
