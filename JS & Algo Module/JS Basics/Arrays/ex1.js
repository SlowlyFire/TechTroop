/**
 * Here is an array of numbers:

const numbers = [1,2,3,4,5,6,7,8,9,10]
Copy to clipboardErrorCopied
Now follow these instructions:

1.delete the second and third elements
2.change the fourth element to 1
3.delete the last 4 elements
4.add another element 0 to the beginning of the array
5.print the modified array
 */

const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2); // delete 2,3
numbers[3] = 1;
numbers.splice(numbers.length - 4, 4); // delete last 4 elements
numbers.splice(0, 0, 0); // add 0 to beginning

console.log(numbers);
