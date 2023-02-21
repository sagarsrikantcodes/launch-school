/*
Problem Statement -
Input - Build a Rock Paper Scissors with Bonus Features involving Lizard Spock
Output - Display a message indicating whether the user or
the computer wins, loses, or draws.

Example/Test Cases -


Data Structures -
Input - String data structure
Output - Integer data type

Algorithm -
1. Create a readline function to prompt for user input.
2. Declare and Create an array of strings for valid choices of length 5.
2. Continue playing the game as long as the number of wins for either
the user or the computer is less than 3.
  - Ask the user's choice for rock, paper, scissor, lizard or spock.
  - For Computer's choice - Generate a random number between 0 to 4 inclusive
  and map it to the valid choices from the array. //
  - Invoke a function to compute the winner, loser or tie.
    - If computer is a winner, increment the computerWins by 1.
    Else if the user is q winner , increment the userWins by 1.
    Else if the game results do not make any changes.
  - If the computerWins is equal to 3,
  Display the message "Computer is the grand winner" and break out of the loop.
    Else if the userWins is equal to 3,
    diaplay the message "User is the grand winner" and break out of the loop.

Invoked Function displayWinner
- If user wins, display the message 'You win!'
- Else if computer wins, display the message 'Computer wins!'
- Else display the message "It's a tie!"

*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function wins(userInput, computerInput) {
  return (userInput === 'rock' && computerInput === 'scissors') ||
          (userInput === 'rock' && computerInput === 'lizard') ||
          (userInput === 'paper' && computerInput === 'rock') ||
          (userInput === 'paper' && computerInput === 'spock') ||
          (userInput === 'scissors' && computerInput === 'paper') ||
          (userInput === 'scissors' && computerInput === 'lizard') ||
          (userInput === 'lizard' && computerInput === 'paper') ||
          (userInput === 'lizard' && computerInput === 'spock') ||
          (userInput === 'spock' && computerInput === 'rock') ||
          (userInput === 'spock' && computerInput === 'scissors');
}

function displayandReturnWinner(userInput, computerInput) {
  if (wins(userInput, computerInput)) {
    return "User";
  } else if (userInput === computerInput) {
    return "Tie";
  } else {
    return "Computer";
  }
}

let userWins = 0;
let computerWins = 0;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (displayandReturnWinner(choice, computerChoice) === "User") {
    prompt("You win!");
    userWins += 1;
  } else if (displayandReturnWinner(choice, computerChoice) === "Computer") {
    prompt("Computer wins!");
    computerWins += 1;
  } else {
    prompt("It's a tie!");
  }

  if (userWins === 3 || computerWins === 3) {
    if (userWins === 3) {
      console.log("Congratulations, you are the grand winner!");
    } else {
      console.log("Computer is the grand winner!");
    }
    break;
  }
}


