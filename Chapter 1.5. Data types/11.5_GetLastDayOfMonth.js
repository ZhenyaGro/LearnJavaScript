/*
Write a getLastDayOfMonth(year, month)
returns the last day of the month. It may be 28 - 31.
*/

'use strict';

function getLastDayOfMonth(year, month) {
  let startDate = new Date(year, month, 28);
  let currentMonth = startDate.getMonth();
  let numberOfDays = 28;

  for (let i = 0; i < 4; i++) {
    startDate.setDate(startDate.getDate() + 1);

    if (startDate.getMonth() == currentMonth) {
      numberOfDays += 1
    } else return numberOfDays;
  }
}

alert(getLastDayOfMonth(2012, 1)); // 29-th, February