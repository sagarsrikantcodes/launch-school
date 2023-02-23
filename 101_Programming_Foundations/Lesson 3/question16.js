/*

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]]

Create a new array that contains all of the above values 
in an un-nested format - 
["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"]

*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log("Nested Array")
console.log(flintstones);

let newArray = [];

for (let i = 0; i < flintstones.length; i += 1) {
  if (Array.isArray(flintstones[i])) {
    for (let j = 0; j < flintstones[i].length; j += 1) {
      newArray.push(flintstones[i][j]);
    }
  } else {
    newArray.push(flintstones[i]);
  }
}

console.log("New array without nesting");
console.log(newArray); // logs ["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"]
