/*
Problem Statement - 
1. Input - Given ages object for the Munster Family. 
2. Output - Add entries for Marilyn and Spot to the ages object. 

Example/Test Cases - 
Test Case - 1
Input - 
let ages = {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10};
Add  entries for Marilyn and Spot to the Object 
let additionalAges = {Marilyn: 22, Spot: 237}

Output - 
ages = {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10, Marilyn: 22, Spot: 237}

Data Structures - 
Objects

Algorithm - 
1. Iterate through the additionalAges object for each key/property. 
  - Assign the key and value pair onto the ages object. 
2. Validate the output by printing the ages object.

*/

let ages = {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10};
let additionalAges = {Marilyn: 22, Spot: 237};


for (let key in additionalAges) {
  ages[key] = additionalAges[key];
}


/* Alternative Method 
Object.assign(ages, additionalAges);

*/

console.log(ages); // logs {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10, Marilyn: 22, Spot: 237}


