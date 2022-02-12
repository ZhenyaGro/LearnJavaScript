/*
Create a getAverageAge(users) function
that takes an array of objects with age property
and returns average age.
*/

'use strict';

function getAverageAge(users) {
  return users.reduce((sumAges, currentUser) => sumAges + currentUser.age, 0) / users.length;
}

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28