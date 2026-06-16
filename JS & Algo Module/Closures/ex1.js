function StringFormatter() {
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function toSkewerCase(str) {
    return str.replace(/ /g, "-");
  }

  return {
    capitalizeFirst,
    toSkewerCase
  };
}

// Usage:
const formatter = StringFormatter();
console.log(formatter.capitalizeFirst("dorothy")); // "Dorothy"
console.log(formatter.toSkewerCase("blue box"));   // "blue-box"

