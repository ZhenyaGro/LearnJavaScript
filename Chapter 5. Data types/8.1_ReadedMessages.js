/*
There is an array of messages.
We have acces to them, but the management of this array happens somwhere else.
New messages are added and old are deleted, we don't know when it might happen.

Which of data structure is better to use to answer the question "Was the message read?"

When message is deleted from the array it must also dissapear from the data structure.

Whe should not modify the message objects themselves.
*/

'use strict';

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);

messages.push({ text: "What's up?", from: "John" });

readMessages.add(messages[3]);

alert(readMessages.has(messages[3]));