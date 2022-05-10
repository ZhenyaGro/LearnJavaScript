// Is it possible to change an object declared with const?

'use strict';

const user = {
  name: "John"
};

// Will it work?
user.name = "Pete";

alert(user);