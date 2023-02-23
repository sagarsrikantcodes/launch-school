/*
Problem Statement -
Consider the following object:
let flintstones = {Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5};
Create an array from this object that contains only two elements:
['Barney', 2]

Example/Test Case - 
['Barney', 2]

Algorithm - 
1. Create an empty array, result. 
2. Push  "Barney" and flintstones["Barney"] onto the result array.

*/

let flintstones = {Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5};
/*
let result = [];
result.push("Barney", flintstones["Barney"]);
console.log(result); // Logs ['Barney', 2]
*/

/* Alternative Method 
Using Object.entries method

*/
let result = [];

for (const [key,value] of Object.entries(flintstones)) {
  if (key === "Barney" && value === flintstones["Barney"]) {
    result = [key, value];
    break;
  }
}

console.log(result);

