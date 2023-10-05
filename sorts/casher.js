function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

function casher(func) {
  const cash = {};

  return function (n) {
    if (cash[n]) {
      console.log('From cash: ');
      return func(n);
    }
    cash[n] = func(n);
    console.log('Calculated: ');
    return cash[n];
  }
}

const cashing = casher(factorial);
console.log(cashing(5));
console.log(cashing(5));
console.log(cashing(2));
console.log(cashing(5));
console.log(cashing(3));
console.log(cashing(2));