/*
Write code how to get:
- element <div>;
- <ul>;
- the second <li> (with name Pit).
*/

'use strict';

alert(document.body.firstElementChild); // div
alert(document.body.children[1]); // ul
alert(document.body.children[1].lastElementChild); // li