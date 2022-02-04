/*
Create an object 'calculator' with three methods:

read() requests two values and saves them as properties of the object.
sum() returns the sum of the saved values.
mul() multiplies the saved values and returns the result.
*/

'use strict';

let calculator = {
  read() {
    this.a = +prompt("Input a", 2);
    this.b = +prompt("Input b", 6);
  },

  sum() { return this.a + this.b; },

  mul() { return this.a * this.b; }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());