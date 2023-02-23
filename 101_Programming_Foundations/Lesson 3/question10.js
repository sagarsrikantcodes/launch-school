/*
Problem Statement - 
Return a new version of this sentence that ends just before the word house. 
Remove everything starting from the beginning of house to the end of the sentence.

Example/Test Case - 
Input
let advice = "Few things in life are as important as house training your pet dinosaur.";
Output 
"Few things in life are as important as "

*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

let result = advice.substring(0, advice.indexOf("house"));

/*
Alternate Approach 

let result = advice.slice(0, advice.indexOf("house"));
*/

console.log(result); // logs "Few things in life are as important as "