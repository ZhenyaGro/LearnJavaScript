/*
Write a count(obj) function that returns a number of the object propertis.
*/

'use strict';

function count(obj) {
  return (Object.keys(obj)).length;
}

let user = {
  name: 'John',
  age: 30
};

alert(count(user)); // 2