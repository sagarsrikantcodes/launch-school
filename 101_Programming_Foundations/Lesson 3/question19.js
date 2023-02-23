/*

Question 19 - 
How to center the following title above the table
with spaces 

let title = "Flintstones Family Members";

*/
let title = "Flintstones Family Members";

let padding = Math.floor((40 - title.length) / 2);
title = title.padStart(padding + title.length, ' ');

console.log(title);
// Logs        Flintstones Family Members

