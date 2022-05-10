/*
Write a shuffle(array) function that iterates reirders the elements of an array.
All sequences of elements must have the same probability.
*/

// This solution is not correct.

'use strict';

function shuffle(array) {

  // from -1.5 to 1.5
  let rnd = function () {
    return Math.floor(Math.random() * 4) - 1.5;
  };

  return array.sort(rnd);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr));
alert(shuffle(arr)); 