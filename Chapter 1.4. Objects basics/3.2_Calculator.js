/*
Create a function 'Calculator' that creates objects with three methods:

read() asks for two values with prompt and saves their value in the properties of the object.
sum() returns the sum of the entered properties.
mul() returns the product of the entered properties.
*/

function Calculator() {

  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());