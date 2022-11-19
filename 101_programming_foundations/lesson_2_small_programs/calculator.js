// Welcoming the user to our program 
console.log('Welcome to Calculator!');
// Ask the user to enter the first number
let rlSync = require('readline-sync');
let number1 = Number(rlSync.question("What's the first number? "));
console.log(number1);

// Ask the user to enter the second number
let number2 = Number(rlSync.question("what's the second number? "));
console.log(number2);

// Ask the user for an operation to perform.
let operation = rlSync.question("Enter the operation to perform 1) Add 2) Subtract 3) Multiply 4) Divide");
console.log(operation);

// Perform the operation on the two numbers.
let result = 0;
if (operation === '1') {
  result = number1 + number2;
} else if (operation === '2') {
  result = number1 - number2;
} else if (operation === '3') {
  result = number1 * number2;
} else if (operation === '4') {
  result = number1 / number2;
}

// Print the result to the terminal.
console.log(`The result is: ${result}`);
