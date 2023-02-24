/*
Write a program that outputs The Flintstones Rock! 
10 times, with each line indented 1 space to the right 
of the line above it. 

Output- 
The Flintstones Rock!
  The Flintstones Rock!
    The Flintstones Rock!
      The Flintstones Rock!
        The Flintstones Rock!
          The Flintstones Rock!


*/

let nspaces = 0;

for (let i = 0; i < 10; i += 1) {
  for (let j = 0; j < nspaces; j += 1) {
    process.stdout.write(" ");
  }
  console.log("The Flintstones Rock!");
  nspaces += 1;
}

