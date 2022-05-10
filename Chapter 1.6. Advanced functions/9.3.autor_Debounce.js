/*
The result of debounce(f, ms) decorator should be a wrapper
that passes the call f at most once every ms milliseconds.
*/

'use strict';

function debounce(f, ms) {

  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

let f = debounce(alert, 1000);

f(1); // Executing
f(2); // Ignore

setTimeout(() => f(3), 100); // Ignore (100 ms)
setTimeout(() => f(4), 1100); // Executing
setTimeout(() => f(5), 1500); // Igrone (less than 400 ms)