/*
Problem Statement-
1. Input - Given a string.
2. Output - Create a new string that contains 
all lowercase letters except for the first
character, which should be capitalized. 

Example/Test Case-
let munstersDescription = "the Munsters are CREEPY 
and Spooky."
Output - "The munsters are creepy and spooky."

Data Structures - 
Input - String data structure
Output - String data structure

Algorithm -
1. Declare and create an empty string, result.
2. Iterate through the given string, munstersDescription.
  - If index is 0, Convert the character at the first index, 0 to uppercase. 
  Else, Convert the characters at the remaining indices to lowercase.
  - append the character, ch onto the result string. 
3. Return the result string.
*/

function captializeOnlyFirstCharacter(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    let character = str[i];
    if (i === 0) {
      character = character.toUpperCase();
    } else {
      character = character.toLowerCase();
    }
    result += character;
  }
  return result;
}


let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(captializeOnlyFirstCharacter(munstersDescription));






/* Alternative Approach - 
function captializeOnlyFirstCharacter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
*/



