class Exercises {
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }
}

const ex = new Exercises();

describe("isEven", () => {
  test("returns truthy for an even number", () => {
    expect(ex.isEven(4)).toBeTruthy();
  });

  test("returns falsy for an odd number", () => {
    expect(ex.isEven(3)).toBeFalsy();
  });

  // Exercise 5 edge cases
  test("returns truthy for 0 (zero is even)", () => {
    expect(ex.isEven(0)).toBeTruthy();
  });

  test("returns falsy for a negative odd number", () => {
    expect(ex.isEven(-7)).toBeFalsy();
  });

  test("returns truthy for a negative even number", () => {
    expect(ex.isEven(-8)).toBeTruthy();
  });
});