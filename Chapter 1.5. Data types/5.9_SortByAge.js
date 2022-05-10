/*
Create a sortByAge(users) function
that takes an array of objects with an age property
and sorts them by it.
*/

'use strict';

function sortByAge(users) {

  let compareAge = function (user1, user2) {
    if (user1.age > user2.age) return 1;
    if (user1.age == user2.age) return 0;
    if (user1.age < user2.age) return -1;
  };

  return users.sort(compareAge);
}

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let users = [vasya, petya, masha];

sortByAge(users);

// [vasya, masha, petya]
alert(users[0].name); // Vasya
alert(users[1].name); // Masha
alert(users[2].name); // Petya