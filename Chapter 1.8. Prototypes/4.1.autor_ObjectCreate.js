/*
There is a dictionary object
created with Object.create(null) to hold any key/value pairs.
Add dictionary.toString() method
that should return a list of keys.
This "toString" should not be printed when iterating over an object with a for..in loop.
*/

'use strict';

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(dictionary).join();
    }
  }
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // __proto__ here is a key

for (let key in dictionary) {
  alert(key); // "apple" then "__proto__" 
}

alert(dictionary); // "apple,__proto__"