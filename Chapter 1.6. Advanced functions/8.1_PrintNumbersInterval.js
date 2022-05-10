/*
Write printNumbers(from, to) function that
prints a number every second from "from" to "to" 
1. Using 'setInterval'.
2. Using recursive 'setTimeout'.
*/

'use strict';

// Interval
function printNumbers(from, to) {
  let timerId = setInterval(printNumbers, 1000, from, to);

  for (let i = from; i <= to; i++) {
    alert(i);
  }

  clearInterval(timerId);
}

printNumbers(2, 6);