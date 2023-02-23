/*
Problem Statement - 
In the previous problem, our first answer added 'Dino' to the array. 
How can we add multiple items to our array.

By Iterating through the additional multiple items 
and push the additional items one by one onto the flintstones array. 

*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
let additionalItems = ["Dino", "Hoppy"];

/*
for (let i = 0; i < additionalItems.length; i += 1) {
  flintstones.push(additionalItems[i]);
}
*/

/*
Alternative Approach - 
We can pass multiple arguments to push 
*/
flintstones.push("Dino", "Hoppy");
console.log(flintstones); // logs ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles", "Dino", "Hoppy"]