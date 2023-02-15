const { spellchecker } = require("./spellchecker");

describe("spellchecker", () => {
  describe("correctly spelled words", () => {
    it("returns a single character word", () => {
      expect(spellchecker("a")).toBe("a");
    });

    it("returns a two character word", () => {
      expect(spellchecker("to")).toBe("to");
    });

    it("returns a three character word", () => {
      expect(spellchecker("the")).toBe("the");
    });
  });

  describe("incorrectly spelled words", () => {
    it("returns a formatted incorrectly spelled single character word", () => {
      expect(spellchecker("z")).toBe("~z~");
    });

    it("returns a formatted incorrectly spelled two character word", () => {
      expect(spellchecker("ot")).toBe("~ot~");
    });

    it("returns a formatted incorrectly spelled three character word", () => {
      expect(spellchecker("thw")).toBe("~thw~");
    });
  });
});
