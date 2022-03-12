'use strict';

function sum(number) {
  let result = number;

  extendSum.toString = function () {
    return result;
  };

  function extendSum(number) {
    result += number;
    return extendSum;
  }

  return extendSum;
}

alert(sum(1)(2)); // == 3; 1 + 2
alert(sum(1)(2)(3)); // == 6; 1 + 2 + 3
alert(sum(5)(-1)(2)); // == 6
alert(sum(6)(-1)(-2)(-3)); // == 0
alert(sum(0)(1)(2)(3)(4)(5)); // == 15