/*
Create a sortByAge(users) function
that takes an array of objects with an age property
and sorts them by it.
*/

'use strict';

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// [vasya, masha, petya]
alert(arr[0].name); // Vasya
alert(arr[1].name); // Masha
alert(arr[2].name); // Petya