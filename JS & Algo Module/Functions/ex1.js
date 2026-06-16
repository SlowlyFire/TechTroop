/**
 * Write a function called isEven that accepts a number as a parameter and checks if the number is even or not.
 * Return true if it is even or false if it is odd. Don't Google this one ;) Use modulo %
 */

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

console.log(isEven(5));
console.log(isEven(6));