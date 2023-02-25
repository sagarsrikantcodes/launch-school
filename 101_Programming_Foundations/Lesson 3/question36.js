function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return // same as return; which returns undefined
  {
    prop1: "hi there"
  };
}

console.log(first()); // logs {prop1: 'hi there'}
console.log(second()); // logs undefined










