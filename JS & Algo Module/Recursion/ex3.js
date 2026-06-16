function swap(arr1, arr2) {
  // Base case: nothing left to move
  if (arr1.length === 0) return;
  // Move the first element from arr1 into arr2
  arr2.push(arr1.shift());
  // Recurse on the remaining elements
  swap(arr1, arr2);
}

// Usage:
const arr1 = [1, 2, 3];
const arr2 = [];
swap(arr1, arr2);
console.log(arr1); // []
console.log(arr2); // [1, 2, 3]