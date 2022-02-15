/*
There is an array of messages same as in task 8.1.
Which the data structure is better to use to store date and time information about reading? 
*/

'use strict';

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readTime = new WeakMap();

readTime.set(messages[0], '15.02.2022 20:14:44')