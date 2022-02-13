/*
Anagrams are words in which the same letters are in the same number, but they are in random order.
Create an aclean(arr) function that returns an array of words cleaned of anagrams.
*/

'use strict';

function aclean(arr) {

  let getWords = function (word) {
    return { word: word.split('') };
  };

  let words = new Map(arr.map(getWords) /* nap, [n, a, p] */);
  return Array.from(words);

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

/*

let words = {
  nap: [n, a, p],
  teachers: [t, e, a, c, h, e, r, s],
}

if([nap] == )
*/