// Given Following Question/Problem Statement
let numbers = [1, 2, 3];
numbers[6] = 5;
/* Determine if the above code raises an error?
The above code wouldn't raise an error.
numbers = [1, 2, 3, undefined, undefined, undefined, 5]
*/
console.log(numbers);

// Bonus Question - What would numbers[4] return? - undefined since it is
// an empty item.
console.log(numbers[4]); // logs undefined 

