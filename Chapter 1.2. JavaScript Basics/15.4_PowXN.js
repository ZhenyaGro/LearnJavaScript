/*
Write a function pow(x,n) that returns x
to the power of n.
*/

'Use strict';

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Enter a natural number`);
} else {
  alert(pow(x, n));
}

pow(3, 2) // 3 * 3 = 9
pow(3, 3) // 3 * 3 * 3 = 27
pow(1, 100) // 1 * 1 * ...* 1 = 1