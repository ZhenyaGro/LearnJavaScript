/*
Create a "braking" decorator throttle(f, ms)
that returns a wrapper by passing the call to "f"
at most once every "ms" miliseconds.
Those calls that fall into the "braking" period are ignored.
Difference frome "debounce" - if the ignored call is the last one during the "debounce" then it is executed at the end.
*/

'use strict';

function throttle(f, ms) {

  let isCooldown = false;
  let lastRequest, savedThis, savedArgs;

  return function () {
    if (isCooldown) {
      lastRequest = f;
      savedThis = this;
      savedArgs = arguments;
      return;
    }

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
      if (lastRequest) {
        lastRequest.apply(savedThis, savedArgs);
      }
    }, ms);

  };
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1); // Shows 1
f1000(2); // Ignored (1000 ms)
f1000(3); // Ignored (1000 ms)
// After 1000 ms, shows 3 (3 is the last)