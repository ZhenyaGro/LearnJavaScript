// We have an array of objects to sort.
// Write byField the function.

'use strict';

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

let sortedNames = [];

function byField(property) {
  return function (a, b) {
    return a[property] > b[property] ? 1 : -1;
  }
}

/*
Standart methods
// By name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// By age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
*/

// Can we use this?
users.sort(byField('name'));
for (let user of users) sortedNames.push(user.name);
alert(sortedNames);

sortedNames.length = 0;

users.sort(byField('age'));
for (let user of users) sortedNames.push(user.name);
alert(sortedNames);
