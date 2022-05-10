/*
We have an array of object "user", all them have "name", "surname" and "id".
Write code that create one more array of object with parametrs "id" and "fullName", where "fullName" includes "name" and "surname".
*/

'use strict';

let vasya = { name: "Vasya", surname: "Pupkin", id: 1 };
let petya = { name: "Petya", surname: "Ivanov", id: 2 };
let masha = { name: "Masha", surname: "Petrova", id: 3 };

let users = [vasya, petya, masha];

/* ... code ... */

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id + ' ' + usersMapped[0].fullName); // 1 Vasya Pupkin
alert(usersMapped[1].id + ' ' + usersMapped[1].fullName); // 2 Petya Ivanov