/*
Write a function filterRangeInPlace(arr, a, b) that takes an array arr and removes all values from it except those between a and b. That is, the check looks like a ≤ arr[i] ≤ b.

The function must modify the received array and return nothing.
*/

'use strict';

function filterRangeInPlace(gotArr, a, b) {
  arr = gotArr.filter(item => (a <= item && b >= item));
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // Removed numbers out of range 1..4

alert(arr); // [3, 1]