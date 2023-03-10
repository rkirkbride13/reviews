const equation_reader = require('./equation_reader')

describe("Equation reader", () => {

  it("reads a single term inputs and outputs the formatted term", () => {
    expect(equation_reader("1")).toEqual(["1", 1.0])
  })

  it('reads another single term input and outputs the foramtted term', () => {
    expect(equation_reader("2")).toEqual(["2", 2.0])
  })

  it('reads a two term input and outputs the foramtted equation', () => {
    expect(equation_reader("1 + 1")).toEqual(["1 + 1", 2.0])
  })

  it('reads a two term input with subtract and outputs the foramtted equation', () => {
    expect(equation_reader("1 - 1")).toEqual(["1 - 1", 0.0])
  })

  it('reads a two term input with mulitplication and outputs the foramtted equation', () => {
    expect(equation_reader("1 * 1")).toEqual(["1 * 1", 1.0])
  })

  it('reads a two term input with division and outputs the foramtted equation', () => {
    expect(equation_reader("1 / 1")).toEqual(["1 / 1", 1.0])
  })

  it('reads a two term input with division and outputs the foramtted equation', () => {
    expect(equation_reader("2 * 3")).toEqual(["2 * 3", 6.0])
  })
})