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
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'right now';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + ' seconds ago';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' minutes ago';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));