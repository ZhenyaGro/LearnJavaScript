/*
Write printNumbers(from, to) function that
prints a number every second from "from" to "to" 
1. Using 'setInterval'.
2. Using recursive 'setTimeout'.
*/

'use strict';

// Timeout
function printNumbers(from, to) {
  let current = from;
  let timerId = setTimeout(forTimer, 1000, from, to);

  function forTimer(current) {
    if (current <= to) {
      alert(current);
      current++;
      timerId = setTimeout(forTimer, 1000, current, to);
    }
  }

}

printNumbers(2, 6);