/*
We have an array of strings.
Create an unique(arr) function that returns an array with only unique elements of the arr.
*/

'use strict';

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["krishna", "krishna", "hare", "hare",
  "hare", "hare", "krishna", "krishna", ":-O"
];

alert(unique(strings)); // krishna, hare, :-O