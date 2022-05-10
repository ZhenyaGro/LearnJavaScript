/*
Create a getDateAgo(date, days) function that
returns the number that was "days" days ago from "date".
For exmaple if today is 20-th, getDateAgo(new Date(), 1) will return 19-th and getDateAgo(new Date(), 2) - 18-th.
*/

'use strict';

function getDateAgo(date, days) {
  let resultDate = new Date(date.getTime() - days * 24 * 3600 * 1000);
  let resultDay = resultDate.getDate();

  return `Day: ${resultDay}, Date: ${resultDate}`;
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)