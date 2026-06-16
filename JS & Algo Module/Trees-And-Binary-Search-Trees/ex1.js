const BSNode = require('./BSNode');

const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree = new BSNode(letters[0]);
letters.slice(1).forEach(l => bsTree.insertNode(l));

console.log(bsTree.findNode("H")); // true
console.log(bsTree.findNode("G")); // true
console.log(bsTree.findNode("Z")); // false
console.log(bsTree.findNode("F")); // false
console.log(bsTree.findNode("y")); // false