const BSNode = require('./BSNode');

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode(numbers[0]);
numbers.slice(1).forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9));
// 9 is deleted; 11 (its only child) takes its place 

let nodeWithTwoChildren = new BSNode(numbers[0]);
numbers.slice(1).forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8));
// Root 8 is deleted; replaced by 5 (max of left subtree) 