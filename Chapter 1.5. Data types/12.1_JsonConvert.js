/*
Convert user to JSON
then read that JSON into another variable.
*/

'use strict';

let user = {
  name: 'Vasiliy Ivanovich',
  age: 35
};

let userJSON = JSON.stringify(user);
alert(userJSON);

let anotherUser = JSON.parse(userJSON);
alert(`${anotherUser.name}, ${anotherUser.age}`);