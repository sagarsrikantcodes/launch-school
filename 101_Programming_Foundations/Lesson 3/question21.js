/*
Write three different ways to remove all of the 
elements from the array:

let numbers = [1, 2, 3, 4];

1. Using Splice Method 

2. Using Shift Method 

3. Using Pop Method

*/

let numbers = [1, 2, 3, 4];
// Using Splice Method
console.log("Using Splice Method, the numbers array is ");
const removed = numbers.splice(0, numbers.length);
console.log(numbers); // logs [] 

numbers = [1, 2, 3, 4];
// Using shift method to remove the first element 
// while iterating through the loop. 


while (numbers.length > 0) {
  const firstElement = numbers.shift();
}
console.log("Using shift Method, the numbers array is ");
console.log(numbers); // logs [] 

numbers = [1, 2, 3, 4];
iterations = 0;

while (numbers.length > 0) {
  const lastElement = numbers.pop();
}
console.log("Using pop Method, the numbers array is ");
console.log(numbers); // logs [] 


