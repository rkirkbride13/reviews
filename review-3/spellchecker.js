const dictionary = require("./dictionary");

const spellchecker = (word) => {
  if (dictionary.includes(word)) {
    return word
  } else {
    return `~${word}~`
  }
};

module.exports = { spellchecker };
