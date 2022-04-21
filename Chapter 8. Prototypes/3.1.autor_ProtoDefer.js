/*
Add defer(ms) method to all functions in the prototype
which calls functions after ms.
*/

'use strict';

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};


function f() {
  alert('Hello!');
}

f.defer(1000);