/*
We have a salaries object with salaries:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Create a topSalary(salaries) function that returns name of the hightest paid employee.
- if the salaries object is empty, then return null.
- if there are several hight paid employee, then return any of them.
Use Object.entries.
*/

'use strict';

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries));