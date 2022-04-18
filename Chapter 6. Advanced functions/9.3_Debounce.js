/*
The result of debounce(f, ms) decorator should be a wrapper
that passes the call f at most once every ms milliseconds.
*/

'use strict';

function debounce(func, ms) {

  let cdEnd;
  let isCooldown = false;

  function wrapper() {
    let cdStart = Date.now();
    if (cdStart > cdEnd) isCooldown = false;

    if (!isCooldown) {
      func.apply(this, arguments);
      if (ms > 0) {
        isCooldown = true;
        cdEnd = cdStart + ms;
      }
    } else {
      return alert('Cooldown is still active...');
    }
  }

  return wrapper;
}

let f = debounce(alert, 1000);

f(1); // Executing
f(2); // Ignore

setTimeout(() => f(3), 100); // Ignore (100 ms)
setTimeout(() => f(4), 1100); // Executing
setTimeout(() => f(5), 1500); // Igrone (less than 400 ms)