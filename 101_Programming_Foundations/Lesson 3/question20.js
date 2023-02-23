/*

Count the number of lowercase t characters in strings

*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
/*
let count1 = 0;
for (let i = 0; i < statement1.length; i += 1) {
  let char = statement1[i];
  if (char === "t") {
    count1 += 1;
  }
}

let count2 = 0;
for (let i = 0; i < statement2.length; i += 1) {
  let char = statement2[i];
  if (char === "t") {
    count2 += 1;
  }
}


console.log(count1); // logs 2
console.log(count2); // logs 0
*/

/*
Alternative Approach - 
*/
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);



