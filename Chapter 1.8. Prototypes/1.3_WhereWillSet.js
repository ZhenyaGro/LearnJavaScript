/*
What tha object will get the "full" property
when "rabbit.eat()" is called: animal or rabbit?
*/

'use strict';

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto: animal
};

rabbit.eat(); // rabbit