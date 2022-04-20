/*
There are 2 objects.
What do they show?
*/

'use strict';

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert(rabbit.jumps); // true

delete rabbit.jumps;
alert(rabbit.jumps); // null

delete animal.jumps;
alert(rabbit.jumps); // undefined