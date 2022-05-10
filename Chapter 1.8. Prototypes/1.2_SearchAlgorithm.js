/*
1. Using "__proto__" property set ptototypes
so that any property is searched for
in the following path:
"pockets -> bed -> table -> head".

2. How to get the value of glasses faster
- through "pockets.glasses" or
- through "head.glasses".
*/

'use strict';

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert(pockets.pen); // 3
alert(pockets.glasses);
alert(head.glasses); 