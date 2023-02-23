/*
Question 5 - 

Rewrite the function with only one return statement 
and do not explicitly use either true or false. 

*/

/*
Given Function 
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

*/

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid("orange")); // false
console.log(isColorValid("blue")); // true
console.log(isColorValid("white")); // false
console.log(isColorValid("green")); // true