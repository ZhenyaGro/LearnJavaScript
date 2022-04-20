/*
We have 2 hamsers: "speedy" and "lazy";
they both inherit from the common "hamster" object.
When we feed one hamster the other hamster also eats.
Why? How to fix it?
*/

'use strict';

let hamser = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamser
};

let lazy = {
  stomach: [],
  __proto__: hamser
};

// Speedy has found some food
speedy.eat('apple');
alert(speedy.stomach); // apple

// The second hamster has food too
alert(lazy.stomach); // apple