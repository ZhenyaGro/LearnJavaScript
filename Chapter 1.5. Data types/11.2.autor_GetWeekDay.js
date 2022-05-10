/*
Write a getWeekDay(date) function
shows the day of the week in format:
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
*/

'use strict';

function getWeekDay(date) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert(getWeekDay(date));