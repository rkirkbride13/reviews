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

    it("returns a three character word", () => {
      expect(spellchecker("word")).toBe("word");
    });

    it("is not case sensitive", () => {
      expect(spellchecker("Word")).toBe("word");
    });

    it("checks spelling of multiple words", () => {
      expect(spellchecker("the dog walked home")).toBe("the dog walked home");
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

    it("returns a formatted incorrectly spelled three character word", () => {
      expect(spellchecker("wrd")).toBe("~wrd~");
    });

    it("checks spelling of multiple words", () => {
      expect(spellchecker("thw dpg wlked hme")).toBe(
        "~thw~ ~dpg~ ~wlked~ ~hme~"
      );
    });
  });
});
