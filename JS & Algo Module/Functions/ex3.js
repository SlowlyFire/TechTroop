/**
 * Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. 
 * The function should return true or false depending on whether the number exists in the array.
 */

function isExists(arr, num) {
    for (let n of arr) {
        if (n === num) {
            return true;
        }
    }

    return false;
}

const arr = [1,2,3,4,5,6,7,8];
let num1 = 15;
let num2 = 4;

console.log(isExists(arr, num1));
console.log(isExists(arr, num2));