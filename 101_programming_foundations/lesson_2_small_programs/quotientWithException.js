function quotient(number1, number2) {
  if (number2 === 0) {
    throw 'Divisor cannot be zero'
  }
  return number1 / number2;
}


console.log("Enter two integers: ");
let rlSync = require('readline-sync');
let number1 = Number(rlSync.question());
let number2 = Number(rlSync.question());
try {
  let result = quotient(number1, number2);
  console.log(number1 + " / " + number2 + " = " + (number1 / number2));
} catch (e) {
  // console.log("Exception: an integer cannot be divided by zero ");
  console.error(e);
} finally {
  console.log("Execution continues ...");
}