/*
Rewrite the function
using the '?' operator or '||'.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow?');
  }
}

*/

'use strict';

// Using '?'
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow?');
}

// Using '||'
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow?');
}