// Write a sum function that works like this: sum(a)(b) = a + b.

'use strict';

function sum(a) {
  return function (b) {
    return a + b;
  }
}

sum(1)(2); // 3
sum(5)(1); // 6