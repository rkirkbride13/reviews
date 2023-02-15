const { spellchecker } = require("./spellchecker");

describe("spellchecker", () => {
  describe("correctly spelled words", () => {
    it("returns a single character word", () => {
      expect(spellchecker("a")).toBe("a");
    });

    it("returns a two character word", () => {
      expect(spellchecker("to")).toBe("to");
    });
  });

  describe("incorrectly spelled words", () => {
    it("returns a formatted incorrectly spelled single character word", () => {
      expect(spellchecker("z")).toBe("~z~");
    });
  });
});
