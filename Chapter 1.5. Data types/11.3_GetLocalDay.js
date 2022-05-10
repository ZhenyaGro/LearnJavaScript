/*
In European countries, the week starts on Monday (day number 1)
then comes Tuesday (number 2) and so on until Sunday (number 7).
Write a getLocalDay(date) function that returns the "European" day of the week for date.
*/

'use strict';

function getLocalDay(date) {
  let days = ['Sunday - 7', 'Monday - 1', 'Tuesday - 2', 'Wednesday - 3', 'Thursday - 4', 'Friday - 5', 'Saturday - 6'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);  // January 3-th, 2012
alert(getLocalDay(date));       // Tuesday, needs to show 2