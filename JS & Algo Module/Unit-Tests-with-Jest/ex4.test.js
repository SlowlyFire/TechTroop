class Exercises {
  // Method written AFTER tests (TDD)
  validate(arr) {
    const booleans = arr.filter(item => typeof item === "boolean");
    if (booleans.length < 1) {
      return { error: "Need at least one boolean" };
    }
    const trues = booleans.filter(b => b === true).length;
    const falses = booleans.filter(b => b === false).length;
    return trues > falses ? true : false;
  }
}

const ex = new Exercises();

describe("validate", () => {
  test("returns error object when no booleans are in the array", () => {
    expect(ex.validate([1, 2, "hello"])).toEqual({ error: "Need at least one boolean" });
  });

  test("returns true when there are more trues than falses", () => {
    expect(ex.validate([true, true, false])).toBe(true);
  });

  test("returns false when trues do not outnumber falses", () => {
    expect(ex.validate([true, false, false])).toBe(false);
  });

  test("returns false when trues equal falses", () => {
    expect(ex.validate([true, false])).toBe(false);
  });

  // Exercise 5 edge cases
  test("ignores non-boolean values and counts only booleans", () => {
    expect(ex.validate([true, true, false, 42, "yes"])).toBe(true);
  });

  test("returns error for an empty array", () => {
    expect(ex.validate([])).toEqual({ error: "Need at least one boolean" });
  });

  test("returns true when the only boolean is true", () => {
    expect(ex.validate([true])).toBe(true);
  });

  test("returns false when the only boolean is false", () => {
    expect(ex.validate([false])).toBe(false);
  });
});