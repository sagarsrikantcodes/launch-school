/*
Problem Statement - 
Given a string, return a new string that replaces 
every occurrence of the word "important" with 
"urgent". 

Example/Test Case - 
let advice = "Few things in life are as important
as house training your pet dinosaur."

Output Expected - 
advice = "Few things in life are as urgent as house
training your pet dinosaur."

Data Structure - 
String Data Structure 

Algorithm - 
1. Use replaceAll Method .

*/

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.replaceAll("important", "urgent");
console.log(advice); 
// logs Few things in life are as urgent as house training your pet dinosaur.



