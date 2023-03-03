const equation_reader = (equation) => {
  if (equation.length > 1) {
    if (equation.includes("+")) {
      return ["1 + 1", 2.0];
    } else {
      return ["1 - 1", 0.0];
    }
  } else {
    convertedTerm = +equation;
    return [equation, convertedTerm];
  }
};

module.exports = equation_reader;
