/*
Create pseudoRandom(seed) generator function
that takes a seed and creates
a generator with the specified formula.

next = previous * 16807 % 2147483647
*/

'use strict';

function* pseudoRandom(seed) {
  let previous = seed;
  let next;

  while (true) {
    yield next = previous * 16807 % 2147483647;
    previous = next;
  }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073