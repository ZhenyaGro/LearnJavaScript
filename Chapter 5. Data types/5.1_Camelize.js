/*
Write a camelize(str) function that converts strings like "my-short-string" to "myShortString".

That is, hyphens are removed, and all words after them are capitalized.
*/

'use strict';

function camelize(str) {
  let arr = str.split('');

  while (arr.indexOf('-') != -1) {
    arr[arr.indexOf('-') + 1] = arr[arr.indexOf('-') + 1].toUpperCase();
    arr.splice(arr.indexOf('-'), 1);
  }

  let complitedStr = arr.join('');

  alert(complitedStr);
}



camelize("background-color") // == 'backgroundColor';
camelize("list-style-image") // == 'listStyleImage';
camelize("-webkit-transition") // == 'WebkitTransition';