'use strict';

let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json);
  alert(user.name); // There is no name property
} catch (e) {
  alert("It is not working");
} // Finally?