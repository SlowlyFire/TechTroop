/*
Basic Age Check. Create variables for a person's age and use an if statement to check if
they're old enough to vote (18 or older). Display an appropriate message.
*/

let age = 20;

if (age >= 18) {
    console.log(`Person is ${age}, which means he can vote`);
} else {
    console.log(`Person is under 18, therefore he can't vote`);
}