class UniqueArray {
  constructor() {
    this._array = [];
    this._set = new Set(); // used for O(1) exists() lookups
  }

  add(item) {
    if (!this._set.has(item)) {
      this._array.push(item);
      this._set.add(item);
    }
  }

  showAll() {
    console.log([...this._array]);
  }

  exists(item) {
    return this._set.has(item); // O(1)
  }

  get(index) {
    return index < this._array.length ? this._array[index] : -1;
  }
}

// Test
const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll();          // ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll();          // ["toy"]  (no duplicate)
uniqueStuff.exists("toy");      // true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); // "hydrogen"