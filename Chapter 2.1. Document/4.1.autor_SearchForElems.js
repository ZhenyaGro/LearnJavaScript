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

// 1
let table = document.getElementById('age-table')

// 2
table.getElementsByTagName('label')
// or
document.querySelectorAll('#age-table label')

// 3
table.rows[0].cells[0]
// or
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')

// 4
let form = document.getElementsByName('search')[0]
// or
document.querySelector('form[name="search"]')

// 5
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')

// 6
let inputs = form.querySelectorAll('input');
inputs[inputs.length - 1];