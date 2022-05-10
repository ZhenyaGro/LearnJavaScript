/*
We have an array of strings arr. Need to get a sorted copy, but leave arr unchanged.

Create a function copySorted(arr) that will return such a copy.
*/

'use strict';

function copySorted(arr) {
  return arr.concat().sort(); // Autor use "slice()" instead "concat()".
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (without changes)