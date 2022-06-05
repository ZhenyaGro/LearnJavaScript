// Using an "Intl.Collator" sort an array.

'use strict';

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// code
let collator = new Intl.Collator('ru', {
  usage: 'sort',
  sensitivity: 'base'
});

animals.sort((a, b) => {
  return collator.compare(a, b);
});

alert(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК