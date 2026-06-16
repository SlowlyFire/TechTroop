function reverseString(str) {
  // Base case: empty string or single character
  if (str.length <= 1) return str;
  // Recursive case: last character + reverse of the rest
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}
