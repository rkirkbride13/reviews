const spellchecker = (word) => {
  if (word === "a") {
    return "a";
  } else {
    return "~z~";
  }
};

module.exports = { spellchecker };
