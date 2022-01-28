/*
Using the if..else construct, write code that asks a number with prompt and then prints to alert:

1 if the value is higher than zero,
-1 if the value is less than zero,
0 if the value is zero.
*/

"use strict";

let value = prompt('Input number', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}