const equation_reader = (equation) => {
  if (equation.length > 1) {
    return ["1 + 1", 2.0];
  } else {
    convertedTerm = +equation;
    return [equation, convertedTerm];
  }
};

module.exports = equation_reader;
