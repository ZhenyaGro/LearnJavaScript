/*
Which of the alerts will be executed?

What values will be the results of the expressions in the if(...) conditions?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/

"use strict";

// Execute
if (-1 || 0) alert('first');

// Doesn't execute
if (-1 && 0) alert('second');

// Execute
if (null || -1 && 1) alert('third');