/*
Create a readNumber function that will prompt for a numeric value until the visitor enters it.

The function must return a numeric value.

You also need to allow the user to stop the input process by sending an empty string or clicking Cancel. In this case, the function must return null.
*/

'use strict';

function readNumber() {
  let num;

  do {
    num = prompt("Input number", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Number: ${readNumber()}`);