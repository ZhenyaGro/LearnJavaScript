/*
Write a shuffle(array) function that iterates reirders the elements of an array.
All sequences of elements must have the same probability.
*/

'use strict';

function shuffle(array) {

  let j = 0, k = 0, n = 0;

  let randomInteger = function (max) {
    j = Math.floor(Math.random() * (max));
    return j;
  };

  for (let i = 0; i < array.length; i++) {
    j = randomInteger(array.length);
    k = array[j];
    n = array[i];
    array[j] = n;
    array[i] = k;
  };

  return array;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

shuffle(arr);

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
