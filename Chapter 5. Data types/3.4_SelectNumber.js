/*
There is a cost in the form of the string "$120". That is, the currency sign comes first, and then the number.

Create a function extractCurrencyValue(str), which will extract a numeric value from such a string and return it.
*/

'use strict';

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue('$120') === 120); // true