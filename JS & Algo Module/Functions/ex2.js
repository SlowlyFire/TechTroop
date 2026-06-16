/**
 * Write a function that takes in an array of numbers.

The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.
 */

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

function printOddNumbers(arr) {
    for (let element of arr) {
        if (!isEven(element)) {
            console.log(element);
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10,11];
printOddNumbers(arr);