/*
Create a "braking" decorator throttle(f, ms)
that returns a wrapper by passing the call to "f"
at most once every "ms" miliseconds.
Those calls that fall into the "braking" period are ignored.
Difference frome "debounce" - if the ignored call is the last one during the "debounce" then it is executed at the end.
*/

'use strict';

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1); // Shows 1
f1000(2); // Ignored (1000 ms)
f1000(3); // Ignored (1000 ms)
// After 1000 ms, shows 3 (3 is the last)