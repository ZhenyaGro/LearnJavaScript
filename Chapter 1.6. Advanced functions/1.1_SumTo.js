/*
Write a sumTo(n) function 
that calculate the sum of numbers "1 + 2 + ... + n". 
Create 3 solutions:
1. Using a cycle.
2. Through recursion: sumTo(n) = n + sumTo(n - 1) for n > 1.
3. Using the arithmetic progression formula.
*/

// The first solution using a cycle.
'use strict';

function cycleSumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function recSumTo(n) { return n == 0 ? n : n + recSumTo(n - 1); }

function arSumTo(n) {
  return n * (n + 1) / 2;
}

// Testing
alert(arSumTo(0)); // = 0
alert(arSumTo(1)); // = 1
alert(arSumTo(2)); // = 2 + 1 = 3
alert(arSumTo(4)); // = 4 + 3 + 2 + 1 = 10
alert(arSumTo(100)); // = 100 + 99 + ... + 2 + 1 = 5050