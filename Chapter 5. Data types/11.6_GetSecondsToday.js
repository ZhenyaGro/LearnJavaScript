/*
Write a getSecondsToday() function
that returns number of seconds since today.
*/

'use strict';

function getSecondsToday() {
  let dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);

  return Math.round((new Date() - dayStart) / 1000);
}

alert(getSecondsToday());