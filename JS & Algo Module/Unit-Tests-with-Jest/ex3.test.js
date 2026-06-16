class Exercises {
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("");
  }
}

const ex = new Exercises();

describe("simplify", () => {
  test("removes !, #, ., , and ' from a string", () => {
    expect(ex.simplify("Hello, World!")).toBe("Hello World");
  });

  test("returns an empty string when only symbols are given", () => {
    expect(ex.simplify("!#.,'")).toBe("");
  });

  // Exercise 5 edge cases
  test("returns the same string when no symbols are present", () => {
    expect(ex.simplify("clean")).toBe("clean");
  });

  test("handles an empty string", () => {
    expect(ex.simplify("")).toBe("");
  });

  test("handles multiple consecutive symbols", () => {
    expect(ex.simplify("a!!!b")).toBe("ab");
  });
});