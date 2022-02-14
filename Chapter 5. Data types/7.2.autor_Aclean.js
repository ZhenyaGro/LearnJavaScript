/*
Anagrams are words in which the same letters are in the same number, but they are in random order.
Create an aclean(arr) function that returns an array of words cleaned of anagrams.
*/

'use strict';

function aclean(arr) {

  let words = new Map();

  for (let item of arr) {
    let word = item.toLowerCase().split('').sort().join('');
    words.set(word, item);
  }

  return Array.from(words.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"