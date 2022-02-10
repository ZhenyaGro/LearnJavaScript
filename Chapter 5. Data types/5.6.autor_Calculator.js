/*

Create a Calculator constructor function that creates "extensible" calculator objects.

The task consists of two parts.

1. First, implement the calculate(str) method, which takes a string like "1 + 2" in the format NUM operator NUMBER (separated by spaces) and returns the result. The method must understand plus + and minus -.
2. Then add the addMethod(name, func) method, which adds new operations to the calculator. It takes a name operator and a function with two arguments func(a,b) that describes it.

*/

'use strict';

function Calculator() {

  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    let arrSplited = str.split(' '),
      a = +arrSplited[0],
      op = arrSplited[1],
      b = +arrSplited[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert(calc.calculate("23 + 7")); // 30
alert(calc.calculate("23 + 7")); // 30
alert(calc.calculate("23 - 7")); // 16

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8