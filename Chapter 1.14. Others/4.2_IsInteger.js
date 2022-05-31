/*
Write "isInteger(num)" funcrion
that will return "true" if "num" is integer
otherwise "false".
*/

'use strict';

function isInteger(num) {
  return num == ~~num ? true : false;
}

alert(isInteger(1)); // true
alert(isInteger(1.5)); // false
alert(isInteger(-0.5)); // false