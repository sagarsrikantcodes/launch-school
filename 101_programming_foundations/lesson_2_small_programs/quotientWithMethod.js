function quotient(number1, number2) {
  if (number2 === 0) {
    console.log("Divisor cannot be zero");
    process.exit(0);
  }

  return number1 / number2;
}

console.log("Enter two integers: ");
let rlSync = require('readline-sync');
let number1 = Number(rlSync.question());
let number2 = Number(rlSync.question());

let result = quotient(number1, number2);
console.log(number1 + " / " + number2 + " = " + (number1 / number2));