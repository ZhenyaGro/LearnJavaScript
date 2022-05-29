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
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        return new ReferenceError(`The property does not exist: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Error