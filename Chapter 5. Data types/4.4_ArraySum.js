/*
Write a sumInput() function that:

Asks the user to enter values using prompt and stores them in an array.
Stops prompting for values when the user enters a non-numeric value, an empty string, or clicks Cancel.
Counts and returns the sum of the elements of an array.
P.S. Zero 0 is considered a number, do not stop entering values when entering "0".
*/

'use strict';

function sumInput() {
  let arr = [];
  let currentNumber;
  let i;
  let sum = 0;

  function checkFinish(curNum) {
    return isNaN(+curNum) ||
      curNum == null ||
      curNum === '';
  }

  for (i = 0; ; i++) {
    currentNumber = prompt(`Input number ${i + 1}`, 0);

    if (!checkFinish(currentNumber)) {
      arr[i] = +currentNumber;
    } else break;
  }

  alert('NaN number has been inputed');
  alert(`We have array[${i}] = ${arr}`);

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  alert('Array sum = ' + sum);
}

sumInput();