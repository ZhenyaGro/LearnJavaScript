/*
In "4.1_SearchForElems.html" how to find:
1. Table with id = "age-table".
2. All elements "label" in this table (there are 3 of them).
3. The first "td" in this table (with word "Age").
4. Form with name = "search".
5. The first "input" in the form.
6. The last "input" in the form.
*/

'use strict';

console.log(document.getElementById('age-table')); // (1)
console.log(document.getElementById('age-table').querySelectorAll('label')); // (2)
console.log(document.getElementById('age-table').querySelector('td')); // (3)
console.log(document.getElementsByName('search')[0]); // (4)
console.log(document.getElementsByTagName('input')[0]); // (5)

let inputs = document.querySelectorAll('input');
console.log(inputs[inputs.length - 1]); // (6)
// console.log(Array.from(document.querySelectorAll('input')).slice(-1).join('')); // (6)