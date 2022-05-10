/*
Write code that will ask for login using prompt.

If the visitor enters "Admin", then the prompt prompts for a password, if nothing is entered or the Esc key is pressed - show "Cancelled", otherwise display "I don't know you".

Check password like this:

If the password "I'm in charge" is entered, then display "Hello!",
Otherwise - "Invalid password",
If canceled - "Cancelled".
*/

"use strict";

let userName = prompt("Enter login?", '');

if (userName == 'Admin') {

  let pass = prompt('Password', '');

  if (pass == 'I am in charge') {
    alert('Hello!');
  } else if (pass == '' || pass == null) {
    alert('Cancelled');
  } else {
    alert('Incorrect password');
  }

} else if (userName == '' || userName == null) {
  alert('Cancelled');
} else {
  alert("Unknown user");
}