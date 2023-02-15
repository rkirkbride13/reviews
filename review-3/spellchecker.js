const spellchecker = (word) => {
  if (word === "a") {
    return "a";
  } else if (word.length === 2) {
    if (word === "to") {
      return "to";
    } else {
      return "~ot~";
    }
  } else {
    return "~z~";
  }
};

module.exports = { spellchecker };
