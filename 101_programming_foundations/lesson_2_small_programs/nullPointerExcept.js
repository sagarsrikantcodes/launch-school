// User input for String, s
const readline = require('readline-sync');
let s = readline.question("Enter the string, s\n");

foo(null);
bar(s); 

// Using a try catch finally block 
function foo(x) {
  try {
    console.log("First character: " + x[0]);
  } catch (e) {
    console.log(e.name + ": " + e.message);
    console.log("Null Pointer Exception thrown!");
  }
}

// Using if-else condition 
function bar(x) {
  if (x !== null) {
    console.log("First character: " + x[0]);
  } else {
    console.log("Null Pointer Exception thrown!");
  }
}
