/*
Write a function ucFirst(str) that returns the string str with the first character capitalized.
*/

'use strict';

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("vasya")); // Vasya