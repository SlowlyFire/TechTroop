/**
 * Create two 'people' objects, p1 and p2. Each should have the following properties:

name
age
city
Write some code with the following logic:

If the people are the same age
If the people live in the same city
Print "Jill wanted to date Robert"
If they're not in the same city
Print "Jill wanted to date Robert, but couldn't"
Note that the only data should be in the objects - in your if conditions, make sure to use the objects' properties (keys).
 */

const p1 = {
    name: "gal",
    age: 32,
    city: "ramat gan" 
};

const p2 = {
    name: "lior",
    age: 29,
    city: "ramat gan"
};

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log("Jill wanted to date Robert");
    } else {
        console.log("Jill wanted to date Robert, but couldn't");
    }
} else {
    console.log("Not the same age");
}