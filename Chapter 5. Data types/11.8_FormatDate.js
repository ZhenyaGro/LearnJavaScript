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
  let now = new Date();
  let result = now - date;

  if (result < 1000 && result >= 0) {
    return 'right now';
  }

  if (result < 60 * 1000) {
    return `${Math.round(result / 1000)} seconds ago`;
  }

  if (result < 60 * 60 * 1000) {
    return `${Math.round(result / 60000)} minutes ago`;
  }


  let formatDate = function (number) {
    return number < 10 ? `0${number}` : number;
  };
  let formatYear = function (number) {
    return `${number}`.slice(2);
  };

  let DD = formatDate(date.getDate());
  let MM = formatDate(date.getMonth() + 1);
  let HH = formatDate(date.getHours());
  let mm = formatDate(date.getMinutes());

  let YY = formatYear(date.getFullYear());

  return `${DD}.${MM}.${YY} ${HH}:${mm}`;

}

alert(formatDate(new Date(new Date - 1))); // "right now"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 seconds ago"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 minutes ago"
alert(formatDate(new Date(new Date - 86400 * 1000))); // yesterday