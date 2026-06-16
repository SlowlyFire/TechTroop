class Exercises {
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }
}

const ex = new Exercises();

describe("removeAtLeastOne", () => {
  test("result array is shorter than the original", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalLength = arr.length;
    const result = ex.removeAtLeastOne(arr);
    expect(result.length).toBeLessThan(originalLength);
  });

  // Exercise 5 edge cases
  test("works with a two-element array (minimum valid input)", () => {
    const arr = ["a", "b"];
    const result = ex.removeAtLeastOne(arr);
    expect(result.length).toBeLessThan(2);
  });

  test("returns an array", () => {
    const result = ex.removeAtLeastOne([10, 20, 30]);
    expect(Array.isArray(result)).toBeTruthy();
  });
});