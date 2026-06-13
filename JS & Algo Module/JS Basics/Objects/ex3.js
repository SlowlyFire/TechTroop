/**
 * Run the code once with const name = 'Bob'; and then with const name = 'Ted';

The above code is a reservation system where people can claim their reservations when they arrive.

If the reservation exists and is unclaimed, welcome the user (console log)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use 'Bob' and 'Ted' to test your code:

When you test Bob, it should say "Welcome, Bob"
When you test Ted, it should say "Hmm, someone already claimed this reservation"
If you try a different name, it should say "You have no reservation"
 */

const reservation = {
    "bob": {claimed: false},
    "ted": {claimed: true}
};

const name = "tED";
let lowerCaseName = name.toLowerCase();

if (reservation[lowerCaseName]) {
    if (reservation[lowerCaseName].claimed === false) {
    console.log(`Welcome ${lowerCaseName}!`);
    } else {
        console.log(`Mmm we are sorry, but the reservation is already claimed!`);
    }
} else {
    console.log(`There is nothing under ${lowerCaseName}`);
    reservation[lowerCaseName] = {claimed: true};
    console.log(`Now there is a reservation to ${lowerCaseName} with ${reservation[lowerCaseName].claimed} claimed property`);
}