/*
Create spy(func) decorator
that should return a wrapper
that stores all calls to the function in its calls property.

Each call must be stored as an array of arguments.
*/

'use strict';

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  };

  wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  alert(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}