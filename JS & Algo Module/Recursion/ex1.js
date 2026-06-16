function findFactorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) return 1;
  // Recursive case: n * (n-1)!
  return n * findFactorial(n - 1);
}