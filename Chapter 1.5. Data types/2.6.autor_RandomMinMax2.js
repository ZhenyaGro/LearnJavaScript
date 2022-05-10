/*
Write a function randomInteger(min, max) that generates a random integer from min to max (inclusive).

Any number from the interval min..max must appear with the same probability.
*/

'use strict';

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 3));