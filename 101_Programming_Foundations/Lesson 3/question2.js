// Problem Statement 
/* How to determine whether a given string ends 
with an exclamation mark(!) */

function endsWithExclamationMark(str) {
  // Check if the last character from the String, str 
  // is equal to Exclamation mark (!) 
  return str[str.length - 1] === "!";
}

let str1 = "Come over here!";// true
let str2 = "What's up, Doc?"; // false
/*
console.log(endsWithExclamationMark(str1)); // true
console.log(endsWithExclamationMark(str2)); // false
*/

// Another Approach
console.log(str1.endsWith("!")); // true
console.log(str2.endsWith("!")); // false



