function safeJsonParse(str) {
  try {
    const parsed = JSON.parse(str);
    return parsed;
  } catch (error) {
    return "Invalid JSON format";
  }
}

// Tests
console.log(safeJsonParse('{"name": "John"}'));  // { name: "John" }
console.log(safeJsonParse('invalid json'));        // "Invalid JSON format"
console.log(safeJsonParse('[1, 2, 3]'));           // [1, 2, 3]
console.log(safeJsonParse('{bad: json}'));         // "Invalid JSON format"