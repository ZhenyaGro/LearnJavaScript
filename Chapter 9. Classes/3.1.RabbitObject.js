// Why this is not working?

'use strict';

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit('Rab');

alert(rabbit.hasOwnProperty('name')); // Error