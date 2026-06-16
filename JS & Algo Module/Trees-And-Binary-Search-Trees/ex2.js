const BSNode = require('./BSNode');

const arr = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
const bsTree = new BSNode(arr[0]);
arr.slice(1).forEach(v => bsTree.insertNode(v));

console.log(bsTree.findCommonParent("B", "G")); // "E" 
bsTree.findCommonParent("B", "L"); // "J" 
bsTree.findCommonParent("B", "I"); // "H" 
bsTree.findCommonParent("L", "Y"); // "R" 
bsTree.findCommonParent("E", "H"); // "J" 