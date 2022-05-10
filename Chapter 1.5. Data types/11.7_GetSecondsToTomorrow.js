/*
Create a getSecondsToTomorrow() function 
that returns the number of seconds to tomorrow date.
*/

'use strict';

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return Math.round((tomorrow - now) / 1000);
}

alert(getSecondsToTomorrow());