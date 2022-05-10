/*
There is a salaries object with random number of properties containing wages.
Write a sumSalaries(salaries) function that returns sum of all salaries with Object.values method and for..of cycle.
If salaries object is empty then the result should be 0.
*/

'use strict';

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650