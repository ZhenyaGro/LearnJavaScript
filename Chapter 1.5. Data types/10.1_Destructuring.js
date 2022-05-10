/*
We have an object.
Write a destructuring assignment that:
- name property assign to the name variable.
- years property assign to the age variable.
- isAdmin property assign to the isAdmin variable (false if there is no property).
*/

'use strict';

let user = { name: "John", years: 30 };

// ... = user
let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false