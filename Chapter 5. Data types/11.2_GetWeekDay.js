/*
Write a getWeekDay(date) function
shows the day of the week in format:
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
*/

'use strict';

function getWeekDay(date) {
  switch (date.getDay()) {

    case 0: return 'Sun';
      break;
    case 1: return 'Mon';
      break;
    case 2: return 'Tue';
      break;
    case 3: return 'Wed';
      break;
    case 4: return 'Thu';
      break;
    case 5: return 'Fri';
      break;
    case 6: return 'Sat';
      break;
  }
}

let date = new Date(2012, 0, 3);
alert(getWeekDay(date)); // Tue  