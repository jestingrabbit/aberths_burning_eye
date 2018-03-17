import { polynomial, Polynomial } from './polynomial.js';
import { complex } from './complex.js'
import { Aberth } from './aberth.js'
// import { RootsOfUnity } from '././rootsOfUnity.js'

describe("Aberth", () => {
  it("creates instances of the right class", () => {
    const p = polynomial(1, 1, 1)
    const solver = new Aberth(p)
    expect(solver.constructor.name).toBe("Aberth")
  })

  it("instances have relevant fields", () => {
    const p = polynomial(1, 1)
    const solver = new Aberth(p)

    expect(solver).toEqual(expect.objectContaining({
        poly: expect.any(Polynomial),
        guess: expect.any(Array),
        step: expect.any(Function)
      })
    )
  })

  it("instances have relevant fields", () => {
    const p = polynomial(1, 1)
    const solver = new Aberth(p)

    expect(solver).toEqual(expect.objectContaining({
        poly: expect.any(Polynomial),
        guess: expect.any(Array),
        step: expect.any(Function)
      })
    )
  })

  // it("gives you the roots of unity", () => {
  //   const p = polynomial(1, 0, 0, 0, 0, -1)
  //
  //   const roots = new RootsOfUnity()
  //   const guess = roots.perturbed(5)
  //
  //   const solver = new Aberth(p, guess)
  //
  //   solver.step()
  //   solver.step()
  //   solver.step()
  //   solver.step()
  //   const newGuess = solver.step()
  //
  //   expect(newGuess).toEqual(guess)
  // })
  //
  // it("doesn't move the roots of unity much", () => {
  //   const p = polynomial(1, 0, 0, 0, 0, -1)
  //
  //   const roots = new RootsOfUnity()
  //   const fifthRoots = roots.get(5)
  //
  //   const solver = new Aberth(p, fifthRoots)
  //
  //   const newGuess = solver.step()
  //
  //   expect(newGuess).toEqual(fifthRoots)
  // })

  it("solves x^2 + 4 exactly after a few iterations", () => {
    const p = polynomial(1, 0, 4)
    const guess = [complex(1, 1), complex(-1, 2)]
    const solver = new Aberth(p, guess)

    Array.from({length: 5}, (i)=>i).forEach(()=>{
      solver.step()
    })

    const newGuess = solver.step()

    expect(newGuess).toEqual([complex(0, -2), complex(0, 2)])
  })

  it("can solve to a tolerance", () => {
    const p = polynomial(1, 0, 4)
    const guess = [complex(1, 1), complex(-1, 2)]
    const solver = new Aberth(p, guess)

    expect(solver.solve(0.000000000001)).toEqual([complex(0, -2), complex(0, 2)])
  })

})
