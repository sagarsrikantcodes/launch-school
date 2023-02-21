let rlSync = require('readline-sync');
let continueInput = true;

do {
  try {
    console.log("Enter an integer: ");
    let number = Number(rlSync.question());
    if (typeof number !== Number) {
      throw 'The data type is not Number';
    }
    // Display the result 
    console.log("The number entered is " + number);
    continueInput = false;
  } catch (e) {
    console.log("Try again. (" + "Incorrect input: an integer is required)");
    rlSync.question("\n"); // Discard input
  } finally {
    console.log("Execution continues ...");
  }

} while (continueInput);

