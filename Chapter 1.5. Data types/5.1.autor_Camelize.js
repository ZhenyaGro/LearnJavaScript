/*
Write a camelize(str) function that converts strings like "my-short-string" to "myShortString".

That is, hyphens are removed, and all words after them are capitalized.
*/

'use strict';

function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}



camelize("background-color") // == 'backgroundColor';
camelize("list-style-image") // == 'listStyleImage';
camelize("-webkit-transition") // == 'WebkitTransition';