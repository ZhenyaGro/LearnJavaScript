/*
We would like to get an array of map.keys() keys into a variable and then work with them, for example, use the .push method.

But it doesn't work. Why? Edit the code.
*/

'use strict';

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");