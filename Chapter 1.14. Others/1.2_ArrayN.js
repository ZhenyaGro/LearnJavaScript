/*
In some programming languages it possible
to get elements of an array using negative indexes
(counted from the end).
Like this:

let array = [1, 2, 3];
array[-1]; // 3
array[-2]; // 2
array[-3]; // 1

Create a proxy that implements this behavior.
*/

'use strict';

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop) {
    prop = Number(prop);
    if (prop < 0) {
      return target[target.length + prop];
    } else {
      return target[prop];
    }
  }
});

alert(array[1]); // 2
alert(array[-1]); // 3
alert(array[-2]); // 2