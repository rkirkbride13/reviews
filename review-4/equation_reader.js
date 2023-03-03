const equation_reader = (equation) => {
  if (equation.length > 1) {
    terms = equation.split(" ");
    [firstTerm, operator, secondTerm] = terms;
    let result;
    switch (`${operator}`) {
      case "+":
        result = +firstTerm + +secondTerm;
        break;
      case "-":
        result = +firstTerm - +secondTerm;
        break;
      case "/":
        result = +firstTerm / +secondTerm;
        break;
      case "*":
        result = +firstTerm * +secondTerm;
        break;
      default:
        result = "Invalid operator";
    }
    return [`${firstTerm} ${operator} ${secondTerm}`, result];
  } else {
    convertedTerm = +equation;
    return [equation, convertedTerm];
  }
};

module.exports = equation_reader;
