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
function inBetween(min, max) {
  return function (number) {
    if (number >= min && number <= max) return true;
    return false;
  }
}

function inArray(checkingArr) {

  for (let i = 0; i < checkingArr.length; i++) {
    return function (number, index, arr) {
      if (arr.includes(checkingArr[i])) {
        checkingArr.shift();
        return true;
      }
      checkingArr.shift();
      return false;
    }
  }
}


// Testing
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2