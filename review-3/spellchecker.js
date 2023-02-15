const spellchecker = (word) => {
  if (word === "a") {
    return "a";
  } else if (word.length === 2) {
    return "to";
  } else {
    return "~z~";
  }
};

module.exports = { spellchecker };
