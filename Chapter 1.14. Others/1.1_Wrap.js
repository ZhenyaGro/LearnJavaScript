/*
When you read a non-existent property from an object
it returns "undefined".
Create a proxy that generates an error
when trying to read a non-existent property.
Write "wrap(target)" function
that takes "target" object
and returns proxy that adds that aspect
of functionality to it.
*/

'use strict';

let user = {
  name: 'John'
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        return new Error('the property does not exist');
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Error: the property does not exist