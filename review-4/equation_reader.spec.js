const equation_reader = require('./equation_reader')

describe("Equation reader", () => {

  it("reads a single term inputs and outputs the formatted term", () => {
    expect(equation_reader("1")).toEqual(["1", 1.0])
  })
})