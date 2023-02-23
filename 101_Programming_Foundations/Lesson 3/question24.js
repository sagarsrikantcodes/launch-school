// What is the following code output?
let arr1 = [{first: "value1"}, {second: "value2"}, 3, 4, 5];
let arr2 = arr1.slice(); // copy of array, arr1. 
arr2[0].first = 42;
console.log(arr1); 
// logs [{first: 42}, {second: "value2"}, 3, 4, 5];
// Since arr1 is not mutating, only arr2 is mutating.

