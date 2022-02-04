/*
built-in method Math.random() returns a random number between 0 (inclusive) and 1 (but not including 1)

Write a function random(min, max) that generates a random floating point number from min to max (but not including max).
*/

'use strict';

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));