/*
The code makes an array of shooters.
Each function os desogmed to display their serial numbers. But it doesn't work.
Make the code correct.
*/

'use strict';

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();