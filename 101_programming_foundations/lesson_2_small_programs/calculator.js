// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Function to check for invalid number
function invalidNumber(number) {
  return  number.trimStart() === '' || Number.isNaN(Number(number));
}

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  prompt("What's the first number?");
  number1 = readline.question();
}

//console.log(number1);

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  prompt("What's the second number?");
  number2 = readline.question();
}

// console.log(`${number1} ${number2}`);
prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let result;

/* If else statement
if (operation === "1") {
  result = Number(number1) + Number(number2);
  // console.log(`The addition of ${number1} and ${number2} is ${result}`);
} else if (operation === "2") {
  result = Number(number1) - Number(number2);
} else if (operation === "3" ) {
  result = Number(number1) * Number(number2);
} else if (operation === "4") {
  result = Number(number1) / Number(number2);
}
*/

switch (operation) {
  case '1' :
    result = Number(number1) + Number(number2);
    break;
  case '2' :
    result = Number(number1) - Number(number2);
    break;
  case '3' :
    result = Number(number1) * Number(number2);
    break;
  case '4' :
    result = Number(number1) / Number(number2);
    break;
}

console.log(`The result is ${result}`);

