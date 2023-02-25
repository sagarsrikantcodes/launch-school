/*
Problem - 
Output for the last line 

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);


*/
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); // => [1, 2] 
console.log(object); 
/*
Logs 

{first: [1, 2]}

*/