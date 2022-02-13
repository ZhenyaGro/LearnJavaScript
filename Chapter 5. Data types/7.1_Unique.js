/*
Create an unique(arr) function that returns an array of unique values of array arr.
*/

'use strict';

function unique(arr) {
  let uWords = [];

  for (let word of new Set(arr)) {
    uWords.push(word);
  }

  return uWords;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O