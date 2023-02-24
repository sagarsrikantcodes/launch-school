/*
Return a new string that swaps the case of all 
of the letters:

*/

let munstersDescription = "The Munsters are creepy and spooky.";
let result = "";

for (let i = 0; i < munstersDescription.length; i += 1) {
  let char = munstersDescription[i];
  if (char >= 'a' && char <= 'z') {
    char = char.toUpperCase();
  } else {
    char = char.toLowerCase();
  }
  result += char;
}

console.log(result);

