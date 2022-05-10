/*
Write a factorial(n) function that returns n! using recursio.
*/

'use strict';

function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

// Testing
alert(factorial(5)); // 120