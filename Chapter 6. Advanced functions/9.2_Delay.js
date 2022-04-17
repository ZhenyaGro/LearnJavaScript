/*
Create delay(f, ms) decorator
that delays each call to f by ms milliseconds.
*/

'use strict';

function delay(func, ms) {

  return function wrapper(...args) {
    return setTimeout(func, ms, ...args);
  };
}

function f(x) {
  alert(x);
}

// Create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // Shows "test" after 1000 ms
f1500("test"); // Shows "test" after 1500 ms