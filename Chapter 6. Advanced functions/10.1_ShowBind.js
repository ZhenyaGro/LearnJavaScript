// What will show the function?

'use strict';

function f() {
  alert(this); // undefined - null
}

let user = {
  g: f.bind(null)
};

user.g();