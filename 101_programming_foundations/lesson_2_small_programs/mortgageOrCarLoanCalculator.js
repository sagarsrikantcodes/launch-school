/*
Problem Statement -
Input -
1. The loan amount.
2. The Annual Percentage Rate.
3. The loan duration.

Output -
1. Monthly Interest Rate.
2. Loan Duration in Months.

Implicit Requirements -
1. Work with zero interest loans.
2. Loans without integer number of years
For Example, 10.5 Years instead of 10 or 11 years.

Example/Test Cases -
Test Case - 1
Input
Loan Amount = $100000
Loan Term = 10 Years 0 Months
Interest Rate = 6%
Compound - Monthly (APR)
Pay Back - Every Month

Output -
Monthly Payment = $1110.21
Total of 120 Payments = $133224.60
Total Interest = $33,224.60

Test Case- 2
Edge Case for Zero Interest Loan
Input
Loan Amount = $100000
Loan Term = 10 Years 0 Months
Interest Rate = 0%
Compound - Monthly (APR)
Pay Back - Every Month

Output -
Monthly Payment = $833.33
Total of 120 Payments = $100,000.00
Total Interest = $0.00

Test Case-3
Edge Case - Loans without integer number of years
E.g., 10.5 Years => 10 years and 6 Months
Loan Amount = $100000
Loan Term = 15 Years 6 Months
Interest Rate = 6%
Compound - Monthly (APR)
Pay Back - Every Month

Output -
Monthly Payment = $827.09
Total of 120 Payments = $153,838.28
Total Interest = $53,838.28


Test Case-4
Edge Case - Loans without integer number of years
E.g., 10.5 Years => 10 years and 6 Months
Loans without integer interest rate
E.g., 6.25% interest rate instead of 6% interest rate
Loan Amount = $100000
Loan Term = 15 Years 6 Months
Interest Rate = 6.25%
Compound - Monthly (APR)
Pay Back - Every Month

Output -
Monthly Payment = $840.75
Total of 120 Payments = $156,379.30
Total Interest = $56,379.30

Data Structures -
Input - Numeric data type
Output - Numeric data type

Algorithm -
1. Welcome message to the user.
2. Continue using the calculator and
resetting the values until the user wants to exit.
  - Ask the user to enter the loan amount.
    - If the user enters an invalid loan amount not recognized by the system
    continue asking the user to enter the correct loan amount.
    Eg. (For Eg $50000.50, Enter 50000.50)
  - Ask the user to enter the Annual Percentage Rate/Interest Rate in (%).
    - If the user enters an invalid APR not recognized by the system
    continue asking the user to enter the correct format of APR/Interest Rate.
    (For Eg., For 6.25% Interest Rate please enter 6.25)
  - Ask the user to enter the loan duration.
    - If the user enters an invalid loan duration
    continue asking the user to enter the correct loan duration.
    (For 6.5 Years, Enter 6 Years and 5 Months).
  - Compute the Monthly Interest Rate and Print the Monthly Interest Rate.
  - Compute the loan duration in months and Print the loan duration in months.
  - Compute the monthly payment and print the monthly payment.
  - Compute the total payment made for the entire loan duration and
  print the total payment.
  - Compute the total interest amount for the entire loan duration and
  print the total interest.
  - Ask the user if he wants to continue
  using the calculator for different values.
    - If yes, continue using the calculator.
    Else, exit from the calculator.
  - Thank the user for the time spent and ask for user feedback.
*/

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to loan calculator!");

function isValidNumber(number) {
  if (typeof number === 'number' && !isNaN(number)) {
    return true;
  }
  return false;
}

function isValidInterestRate(number) {
  if (typeof number === 'number' && !isNaN(number)) {
    return true;
  }
  return false;
}

function isValidLoanDuration(year, months) {
  if (typeof year === 'number' && typeof months === 'number' && !isNaN(year) && !isNaN(months)) {
    return true;
  }
  return false;
}

function isValidUserInput(string) {
  if (string === 'Y' || string === 'N') {
    return true;
  }
  return false;
}

const readLine = require('readline-sync');

while (true) {
  // Ask the user to enter the loan amount
  let loanAmount = readLine.question("Enter the valid loan amount in dollars (E.g. $50,000 is 50000.00): ");
  while (isValidNumber(Number(loanAmount)) === false) {
    console.log("Invalid Number. Please a valid number again: ");
    loanAmount = readLine.question();
  }

  // Ask the user to enter the interest rate
  let interestRate = readLine.question("Enter the interest rate in % (E.g.,For 6% is 6): ");
  while (isValidInterestRate(Number(interestRate)) === false) {
    console.log("Invalid interest rate entered. Please enter a valid interest rate in % again: ");
    interestRate = readLine.question();
  }

  // Ask the user to enter the loan duration in years and months respectively.
  let loanDurationInYears = readLine.question("Enter the loan duration in years: ");
  let loanDurationInMonths = readLine.question("Enter the loan duration in months: ");
  while (isValidLoanDuration(Number(loanDurationInYears),
    Number(loanDurationInMonths)) === false) {
    console.log("Invalid number entered. " +
    "Please enter a valid loan duration in years and months again: ");
    loanDurationInYears = readLine.question();
    loanDurationInMonths = readLine.question();
  }

  // Computing the total loan duration in months
  let totalLoanDurationInMonths = (Number(loanDurationInYears) * 12)
  + Number(loanDurationInMonths);
  console.log("Total Loan Duration in Months is " + totalLoanDurationInMonths);

  // Computing the monthly interest rate
  let monthlyInterestRate = Number(interestRate) / 1200;
  console.log("The monthly interest rate is " + monthlyInterestRate);

  // Computing the monthly payment
  let monthlyPayment = Number(loanAmount) *
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate),
    (-totalLoanDurationInMonths))));
  console.log("Payment Every Month $" + monthlyPayment.toFixed(2));

  // Computing the total payments
  let totalPayments = monthlyPayment * totalLoanDurationInMonths;
  console.log("Total of " + totalLoanDurationInMonths + " Payments $" + totalPayments.toFixed(2));

  // Computing the total interest
  let totalInterest = totalPayments - loanAmount;
  console.log("Total Interest $" + totalInterest.toFixed(2));

  // Ask the user if he wants to continue further
  console.log("Would you want to continue calculating further for different loan " +
  "durations, interest rates and loan amounts?" +
  "if YES press 'Y', if NO press 'N'");
  let userInput = readLine.question();
  while (!isValidUserInput(userInput)) {
    console.log("Please enter a valid response. Y for YES or N for NO");
    userInput = readLine.question();
  }
  if (userInput === 'N') {
    console.log("Thank you for your time. We would appreciate your feedback");
    break;
  }
}


