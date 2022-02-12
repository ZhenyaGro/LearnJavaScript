/*
We have an array of strings.
Create an unique(arr) function that returns an array with only unique elements of the arr.
*/

'use strict';

function unique(arr) {
  let newArr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr[j] = arr[i];
      j++;
    } else continue;
  }

  return newArr;
}

let strings = ["krishna", "krishna", "hare", "hare",
  "hare", "hare", "krishna", "krishna", ":-O"
];

alert(unique(strings)); // krishna, hare, :-O