/*
Write a code prints all prime numbers
from 2 to n.

Example. If n = 10 than result 2,3,5,7.
*/

"use strict";

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert(i);
}