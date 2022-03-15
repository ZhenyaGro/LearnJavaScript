/*
Write printNumbers(from, to) function that
prints a number every second from "from" to "to" 
1. Using 'setInterval'.
2. Using recursive 'setTimeout'.
*/

'use strict';

function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);