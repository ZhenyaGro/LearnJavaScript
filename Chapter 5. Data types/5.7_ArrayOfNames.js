/*
You have an array of objects 'user', all them have user.name.
Write code converts them into an array of names.
*/

'use strict';

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let users = [vasya, petya, masha];

// let names = users.forEach(item => item.name);

let names = [];

for (let i = 0; i < users.length; i++) {
  names[i] = users[i].name;
}

/*
let i = 0;
users.forEach(element => {
  names[i] = element.name;
  i++;
});
*/

alert(names); // Vasya, Petya, Masha