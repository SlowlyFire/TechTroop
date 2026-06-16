/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. 
 * For example, 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).
 * Print all 3-digit Armstrong numbers.
 */

function printAllArmstrongNumbers() {
    for (let i=100; i<1000; i++) {
        // console.log(`numbers is: ${i}`);
        let hundreds = Math.floor(i / 100);
        // console.log(`hundreds: ${hundreds}`);
        let dozens = (Math.floor(i / 10)) % 10;
        // console.log(`dozens: ${dozens}`);
        let unity = (i % 100) % 10;
        // console.log(`unity: ${unity}`);
        
        let newNum = hundreds * hundreds *hundreds + dozens * dozens * dozens + unity * unity * unity;

        if (i === newNum) {
            console.log(i);
        }
    }
}

printAllArmstrongNumbers();