/*
Rewrite the if..else construct using the '?' conditional operator:

let message;

if (login == 'Employee') {
  message = 'Hi';
} else if (login == 'Director') {
  message = 'Hello';
} else if (login == '') {
  message = 'Have no login';
} else {
  message = '';
}
*/

"use strict";

let message = (login == 'Employee') ? 'Hi' :
  (login == 'Director') ? 'Hello' :
    (login == '') ? 'Have no login' :
      '';