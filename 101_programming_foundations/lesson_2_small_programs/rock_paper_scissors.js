/*
 Problem Statement - 
 Input - Build a Rock Paper Scissor game. 
 Output - Display a message indicating whether the user or the computer wins, loses, or draws. 

 Example/Test Case - 
 Test Case - 1
 Asking the user to choose scissor (0), rock(1), paper(2) : 1 (user Input)
 The computer randomly generates scissors (0). 
 Output - 
 The computer is scissor. The user is rock. The user wins. 

 Test Case - 2
 Asking the user to choose
 scissor (0), rock (1), paper(2) : 2
 The computer randomly generates a number 2, which is scissors. 
 Output - 
 The computer is paper. The user is paper too. The game is a draw.

 Data Structures - 
 Input - Integer Data Type. 
 Output - String Data Structure displaying the message. 

 Algorithm - 
 1. Continue playing the game as long as the user wishes to play the game. 
  - Ask for the user input in terms of 0, 1 or 2 respectively. 
  - Randomly generate a number between 0 and 3 respectively. 
  - if the userInputNumber is greater than the randomlyGeneratedNumber
    - Display the message indicating the value from the object key of userInput and randomNumberInput stating that the user is a winner. 
    Else if the userInputNumber is less than the randomlyGeneratedNumber
    - Display the message indicating the value from the object key of userInput and randomNumberInput stating that the computer is a winner. 
    Else if the userInputNumber is equal to randomlyGeneratedNumber 
    - Dispaly the message indicating the value from the object key of userInput and randomNumberInput stating that the the game is a draw. 
  - Ask if the user would like to play again. 

 */

  /*
  let readline = require('readline-sync');
  let object = {0 : 'scissor', 1 : 'rock', 2 : 'paper'};
  console.log(object);
  console.log(object[0]);

  while (true) {
    let userInput = readline.question("scissor (0), rock (1), paper(2): ");
    let randomInput = Math.floor(Math.random() * 3);
    let randomly = "" + randomInput;
    if (userInput > randomInput) {
      console.log("The computer is " + object[randomly] + " . You are " + object[userInput] + " . The user is a winner.");
    } else if (userInput < randomInput) {
      console.log("The computer is " + object[randomly] + " . You are " + object[userInput] + " . The computer is a winner.");
    } else {
      console.log("The computer is " + object[randomly] + " . You are " + object[userInput] + " too. The game is a draw.");
    }

    userInput = readline.question("Would you like to play again? y for yes , n for no : ");
    if (userInput === 'n') {
      break;
    }
  }
  */

  // Second Approach 
  const readline = require('readline-sync');
  const VALID_CHOICES = ['rock', 'paper', 'scissors'];

  function prompt(message) {
    console.log(`=> ${message}`);
  }

  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while(!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    if ((choice === 'rock' && computerChoice === 'scissors') || 
    (choice === 'paper' && computerChoice === 'rock') || 
    (choice === 'scissors' && computerChoice === 'rock')) {
      prompt('You win!');
    } else if ((choice === 'rock' && computerChoice === 'paper') || 
    (choice === 'paper' && computerChoice === 'scissors') || 
    (choice === 'scissors' && computerChoice === 'rock')) {
      prompt('Computer wins!');
    } else {
      prompt("It's a tie!");
    }

    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    } 

    if (answer[0] === 'n') {
      break;
    }
  }

  








