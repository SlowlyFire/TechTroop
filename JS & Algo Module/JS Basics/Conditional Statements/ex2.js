/**
 * Grade Classification. Create a variable for a test score (0-100)
 *  and use if-else if-else statements to assign and display a letter grade:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: Below 60
 */

let score = 85;

if (score >= 90) {
    console.log(`A`);
} else if (score >= 80) {
    console.log(`B`);
} else if (score >= 70) {
    console.log(`C`);
} else if (score >= 60) {
    console.log(`D`);
} else {
    console.log(`F`);
}