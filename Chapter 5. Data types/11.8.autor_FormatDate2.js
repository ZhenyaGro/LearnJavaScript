/*
Write a furmateDate(date) function
that formats a date:

- If less than 1 second has elapsed since date, print "right now".
- Otherwise if less than 1 minute has passed since date, print "n seconds ago".
- Otherwise if less than an hour, print "m minutes ago".
- Otherwise the full date is in the format "DD.MM.YY HH:mm".
*/

'use strict';

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'right now';
  } else if (diffMin < 1) {
    return `${diffSec} seconds ago`
  } else if (diffHour < 1) {
    return `${diffMin} minutes ago`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));