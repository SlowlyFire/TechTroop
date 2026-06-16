class Exercises {
  add(x, y) {
    let stuff = [];
    stuff.push(x, y);
  }
}

const ex = new Exercises();

describe("add – spy on Array.prototype.push", () => {
  test("push is called inside add()", () => {
    const pushSpy = jest.spyOn(Array.prototype, "push");
    ex.add(1, 2);
    expect(pushSpy).toHaveBeenCalled();
    pushSpy.mockRestore();
  });

  test("push is called with the two arguments passed to add()", () => {
    const pushSpy = jest.spyOn(Array.prototype, "push");
    ex.add(3, 4);
    expect(pushSpy).toHaveBeenCalledWith(3, 4);
    pushSpy.mockRestore();
  });
});n