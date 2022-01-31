// Is "else" required?

'use strict'

// func 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow?');
  }
}

// func 2
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow?');
}

// The work of these functions is the same.