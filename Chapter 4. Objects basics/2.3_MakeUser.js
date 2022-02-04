// What will be the result of this function working?

'use strict';

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser2();

alert(user.ref().name); // John