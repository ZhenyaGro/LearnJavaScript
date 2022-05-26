// Call an await function from a common function.

'use strict';

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  new Promise(resolve => resolve(wait())).then(alert);
}

f();