/*
Class Rabbit extends Animal.
Object of Rabbit class is not created. Why?
*/

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White rabbit');
alert(rabbit.name);