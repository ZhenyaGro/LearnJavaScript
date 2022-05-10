/*
Write an if..else corresponding to the following switch

const number = +prompt('Enter a number between 0 and 3', '');

if (number === 0) {
  alert('You have entered 0');
}

if (number === 1) {
  alert('You have entered 1');
}

if (number === 2 || number === 3) {
  alert('You have entered 2 or may be 3');
}

*/

"use strict";

const number = +prompt('Enter a number between 0 and 3', '');

switch (number) {
  case 0:
    alert('You have entered 0');
    break;

  case 1:
    alert('You have entered 1');
    break;

  case 2:
  case 3:
    alert('You have entered 2 or may be 3');
    break;
}