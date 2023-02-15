const { spellchecker } = require("./spellchecker");

describe("spellchecker", () => {
  it("returns a correctly spelled single character word", () => {
    expect(spellchecker("a")).toBe("a");
  });
});
