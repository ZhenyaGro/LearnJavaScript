/*
Create func which multyply all numeric properties of object by 2.

// Before func
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// After func
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

*/

'use strict';

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}