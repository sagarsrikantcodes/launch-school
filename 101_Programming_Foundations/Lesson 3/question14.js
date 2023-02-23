/*
Problem Statement - 
Starting with the string:
let famousWords = "seven years ago...";
Show two different ways to put the expected 
"Four score and" in front of it. 

Example/Test Case - 
Expected Output - 
"Four score and seven years ago"

*/

let famousWords = "seven years ago...";
let prefixWords = "Four score and ";
let resultWords = prefixWords + famousWords;
console.log(resultWords);

famousWords = prefixWords + famousWords;
console.log(famousWords);

console.log("Four score and ".concat("seven years ago..."));