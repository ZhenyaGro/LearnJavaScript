/*
There is a salaries object with random number of properties containing wages.
Write a sumSalaries(salaries) function that returns sum of all salaries with Object.values method and for..of cycle.
If salaries object is empty then the result should be 0.
*/

'use strict';

function sumSalaries(salaries) {
  let sum = 0;

  for (let curNum of Object.values(salaries)) {
    sum += curNum;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650