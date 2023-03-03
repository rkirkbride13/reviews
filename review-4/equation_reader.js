const equation_reader = (equation) => {
  if (equation === "1") {
    return ["1", 1.0];
  } else {
    return ["2", 2.0];
  }
};

module.exports = equation_reader;
