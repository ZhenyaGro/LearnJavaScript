/*
Write a fib(n) function that returns n-th Fibonacci number.
*/

'use strict';

function fib(n) {
  if (n == 0) { return 0; }

  let nums = [1, 1];
  let sum = 0;

  for (let i = 2; i < n; i++) {
    sum = nums[0] + nums[1];
    nums.shift();
    nums.push(sum);
  }

  return sum;
}

// Testing
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757