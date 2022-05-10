/*
Create a function filterRange(arr, a, b) that takes the arr, looks for elements between a and b, and selects an array of these elements.

The function should return a new array and not change the original one.
*/

'use strict';

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && b >= item));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1
alert(arr); // 5,3,8,1