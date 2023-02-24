/*
Problem - 
Output of the code - 
let nanArray = [NaN];

*/

let nanArray = [NaN];
console.log(nanArray[0] === NaN); // logs false

/*
The way to test if a given value is NaN is by using
isNaN() method.

*/

console.log(isNaN(nanArray[0])); // logs true