const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

console.log(Object.keys(dictionary));

for (let char of Object.keys(dictionary)) {
    console.log(`Words that begin with ${char}:`);
    
    for (let element of dictionary[char]) {
        console.log(element);
    }
}
