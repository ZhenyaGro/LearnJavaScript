/*
Write an isEmpty(obj) function that returns true if
the object has no properties, otherwise false.
*/

'use strict';

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}