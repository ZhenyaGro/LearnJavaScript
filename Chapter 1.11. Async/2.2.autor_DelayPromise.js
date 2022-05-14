/*
Delay(ms) function should return a promise
that will transition to the "done" state in 'ms'.
*/

'use strict';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('Executed in 3 seconds'));