// What will show the code?

'use strict';

function f() {
  alert(this.name);
}

f = f.bind({ name: 'Vasya' }).bind({ name: 'Petya' });

f(); // Vasya