/*
Create a function truncate(str, maxlength) that checks the length of the string str and, if it exceeds maxlength, replaces the end of str with "…" so that its length becomes equal to maxlength.

The result of the function must be the same string if truncation is not required, or a truncated string if necessary.
*/

'use strict';

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

truncate("So, I want to tell you something about it. Listen.", 20) // "So, I want to tell …"
truncate("Well, hello!", 20) // "Well, hello!"