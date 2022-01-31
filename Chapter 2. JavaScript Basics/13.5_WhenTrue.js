/*
Write code that prompts the user to enter a number greater than 100.
If the visitor entered a different number, ask them to enter it again, and so on.
*/

"use strict";

let num;

do {
  num = prompt("Enter greater number than 100", 0);
} while (num <= 100 && num);