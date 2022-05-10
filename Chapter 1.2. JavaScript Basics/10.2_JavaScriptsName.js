/*
Using an if..else construct write code that asks the offical name of JavaScript.

If the user enters "ECMAScript", then show: "Correct!" Otherwise, display: "Don't know? ECMAScript!"
*/

'use strict';

let value = prompt('What is the offical name of JavaScript', '');

if (value == 'ECMAScript') {
  alert('Correct!');
} else {
  alert(`Don't know? ECMAScript!`);
}