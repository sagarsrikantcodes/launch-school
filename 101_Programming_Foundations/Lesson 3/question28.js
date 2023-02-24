/*

Finding the factors of a number and storing it in 
the form of an array. 

*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      //factors.push(number / divisor);
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(-1)); // logs []
console.log(factors(0)); // logs [] 
console.log(factors(24));// logs [1,2,3,4,6,8,12,24]

// The purpose of number % divisor to avoid floating point numbers and use only 
// integer data type.
// If we use factors.push(divisor) we get the factors in descending order in the 
// factors array.