/*
Problem Statement - 
The Array.prototype.reverse method reverses the order 
of elements in an array, and Array.prototype.sort can 
rearrage the elements in a variety of ways, including 
descending. Both of these methods mutate the original 
array as shown below. 

Output- 
Write two distinct ways of reversing the array without 
mutating the original array. Use reverse for the first 
solution, and sort for the second. 

Example/Test Case - 

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1] 

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [5, 4, 3, 2, 1]

Data Structures - 
1. Input and Output - Array Data Structure. 

Algorithm - 
1. Declare and create a variable, copyOfNumbers1 
to create the copy of an original array, numbers 
and reverse the elements of copyOfNumbers1 array.
2. Print the contents of copyOfNumbers1 array to validate 
the output.
3. Declare and create a variable, copyOfNumbers2 
to create the copy of an original array, numbers 
and sort the elements of copyOfNumbers2 array. 
4. Print the contents of copyOfNumbers2 array to validate 
the output. 
5. Print the contents of an original array to check
if the original array is not mutated. 

*/

let numbers = [1, 2, 3, 4, 5];
/*
let copyOfNumbers1 = [];
for (let i = 0; i < numbers.length; i += 1) {
  copyOfNumbers1.push(numbers[i]);
}

console.log("copy of numbers1 before reversing " + copyOfNumbers1);
// Reverse the copyOfNumbers1 array 
copyOfNumbers1.reverse();
console.log("Contents of copy of numbers1 after reversing " + copyOfNumbers1);

let copyOfNumbers2 = [];
for (let i = 0; i < numbers.length; i += 1) {
  copyOfNumbers2.push(numbers[i]);
}

console.log("copy of numbers2 before sorting in descending order " + copyOfNumbers2);
// Sort the copyOfNumbers2 array in descending order
copyOfNumbers2.sort((num1, num2) => num2 - num1);
console.log("Contents of copy of numbers2 after sorting in descending order " + copyOfNumbers2);

console.log("Contents of the original array ");
console.log(numbers); // logs [1, 2, 3, 4, 5]
*/

/*
Alternative Approach - 
1. Use Array.prototype.slice() method to create a copy of original array, numbers and then reverse the copy of the array. 
2. Use Spread syntax(...) to create a copy of original array, numbers and then sort the copy of the array.

*/
/*
let copyOfNumbers1 = numbers.slice();
let copyOfNumbers2 = [...numbers];
console.log("Contents of the copy of numbers1 array: ")
console.log(copyOfNumbers1); // logs [1, 2, 3, 4, 5] 
console.log("Contents of the copy of numbers2 array ");
console.log(copyOfNumbers2); // logs [1, 2, 3, 4, 5]

copyOfNumbers1.reverse();
console.log("Contents of the copy of numbers1 array after reversing")
console.log(copyOfNumbers1); // logs [5, 4, 3, 2, 1]

copyOfNumbers2.sort((num1, num2) => num2 - num1);
console.log("Contents of the copy of numbers2 array after sorting in descending order");
console.log(copyOfNumbers2); // logs [5, 4, 3, 2, 1]

console.log("Contents of an original array");
console.log(numbers); // logs [1, 2, 3, 4, 5]

/*

Third Method - Using forEach Method 

*/

numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach(element => {
  reversedArray.unshift(element);
});

console.log("Contents of the reversed array are ");
console.log(reversedArray);

console.log("Contents of an original array are ");
console.log(numbers);




















