// Create a calculator with "eval".

'use strict';

function evalCalc() {
  let result = prompt('Expression:', '1 + 1');
  alert(eval(result));
}

evalCalc();