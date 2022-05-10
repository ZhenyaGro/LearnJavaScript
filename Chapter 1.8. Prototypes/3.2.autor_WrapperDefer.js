/*
Add defer(ms) method to all functions in the prototype
that returns a wrapper that delays the function call
for "ms".
*/

'use strict';

Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

// check it
function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // Shows 3 after 1 second.