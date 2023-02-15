const { spellchecker } = require("./spellchecker");

describe("spellchecker", () => {
  it("returns a correctly spelled single character word", () => {
    expect(spellchecker("a")).toBe("a");
  });

  it('returns a formatted incorrectly spelled single character word', () => {
    expect(spellchecker("z")).toBe("~z~");
  })
});
