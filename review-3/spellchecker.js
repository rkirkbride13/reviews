const dictionary = require("./dictionary");

const spellchecker = (words) => {
  const uncheckedWords = words.split(" ");
  let checkedWords = [];
  uncheckedWords.forEach((word) => {
    if (dictionary.includes(word.toLowerCase())) {
      checkedWords.push(word.toLowerCase());
    } else {
      checkedWords.push(`~${word.toLowerCase()}~`);
    }
  });
  return checkedWords.join(" ");
};

module.exports = { spellchecker };
