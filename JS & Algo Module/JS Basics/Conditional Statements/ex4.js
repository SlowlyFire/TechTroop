/**
 * Multiple Condition Validator. Create variables for username length, password length,
 *  and user age. Use logical operators (&&, ||, !) to check if a user can create an account:

Username must be at least 5 characters
Password must be at least 8 characters
User must be 13 or older
Display specific error messages for each failed condition or success message if all pass
 */

let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5) {
    if (passwordLength >= 8) {
        if (userAge >= 13) {
            console.log(`Success!!`);            
        } else {
            console.log(`You are too young!`);
        }
    } else {
        console.log(`Password isn't long enough!`);        
    }
} else {
    console.log(`Username isn't long enough!`);
}
