/*
Write an if condition to check that age is NOT between 14 and 90, inclusive.

Write two options: the first one using the NOT operator!, the second without this operator.
*/

"use strict";

let age = 10;

if (!(age >= 14 && age <= 90))
  alert('Correct 1!');
if (age < 14 || age > 90)
  alert('Correct 2!');