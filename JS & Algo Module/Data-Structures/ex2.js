class UniqueArray {
  constructor() {
    this._array = [];
    this._keys = new Set(); // stores serialized keys for O(1) lookup
  }

  _serialize(item) {
    // For objects/arrays, produce a stable JSON key.
    // For primitives, just use the value itself (works fine as a Set key).
    if (typeof item === "object" && item !== null) {
      // Sort object keys so {a:1, b:2} and {b:2, a:1} are treated as equal
      return JSON.stringify(item, Object.keys(item).sort());
    }
    return item;
  }

  add(item) {
    const key = this._serialize(item);
    if (!this._keys.has(key)) {
      this._array.push(item);
      this._keys.add(key);
    }
  }

  showAll() {
    console.log([...this._array]);
  }

  exists(item) {
    return this._keys.has(this._serialize(item)); // O(1) amortized
  }

  get(index) {
    return index < this._array.length ? this._array[index] : -1;
  }
}

// Test with primitives (same as before)
const ua = new UniqueArray();
ua.add("toy");
ua.add("toy");
ua.showAll();            // ["toy"]
console.log(ua.exists("toy")); // true

// Test with objects
ua.add({ x: 3 });
ua.add({ x: 3 });        // duplicate — should NOT be added
ua.showAll();            // ["toy", { x: 3 }]
console.log(ua.exists({ x: 3 })); // true
console.log(ua.get(1));           // { x: 3 }