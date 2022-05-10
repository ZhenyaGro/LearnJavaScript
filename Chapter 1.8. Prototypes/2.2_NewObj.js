/*
We have an  object "obj" created by function-constructor.
Can we create another object with the same type?
*/

'use strict';
/*
let obj1 = new Obj1('Rabbit1');
let obj2 = new obj1.constructor('Rabbit2');

// Correct
function Obj1(name) {
  this.name = name;
}

alert(obj1.name);
alert(obj2.name);
*/
// Uncorrect

function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name); // undefined



