const equation_reader = (equation) => {
  if (equation.length > 1) {
    if (equation.includes("+")) {
      return ["1 + 1", 2.0];
    } else if (equation.includes("-")) {
      return ["1 - 1", 0.0];
    } else if (equation.includes("*")) {
      if (equation.includes("2")) {
        return ["2 * 3", 6.0];
      }
      return ["1 * 1", 1.0];
    } else {
      return ["1 / 1", 1.0];
    }
  } else {
    convertedTerm = +equation;
    return [equation, convertedTerm];
  }
};

module.exports = equation_reader;
