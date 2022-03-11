/*
We have a bilt-in arr.filter(f) method.
It filters all elements with f function.
If it returns "true" then the element will add to returning array.

Create filtres:
- inBetween(a, b) - between a and b (include);
- inArray([...]) - located in the array.
*/

'use strict';

// Code
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}


// Testing
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2