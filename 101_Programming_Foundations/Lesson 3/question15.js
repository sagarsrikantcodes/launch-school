/*
Problem Statement - 
Given an array of numbers [1, 2, 3, 4, 5]
Mutate the array by removing the number at 
index 2, so that the array becomes 
[1, 2, 4, 5]. 

Use splice method to remove the element. 

*/

let numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 1); // 3 
console.log("Removed element is " + removed); // logs 3
console.log(numbers); // logs [1, 2, 4, 5]

