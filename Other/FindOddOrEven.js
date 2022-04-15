/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/

"use strict";

function findOutlier(integers) {

  function findEven(arr) {
    let result = arr.find(item => {
      if (!(item % 2)) return true;
    })

    return result == undefined ? false : result;
  }

  function findOdd(arr) {
    let result = arr.find(item => {
      if (item % 2 && (item % 2).toString() != '-0') return true;
    })

    return result == undefined ? false : result;
  }

  let isFirstOdd = integers[0] % 2;
  let withoutFirst = integers.slice(1);

  // Find even
  if (!isFirstOdd) {
    let haveEven = findEven(withoutFirst);

    if (haveEven !== false) return findOdd(withoutFirst);
    return integers[0];
  }

  // Find odd
  if (isFirstOdd) {
    let haveOdd = findOdd(withoutFirst);

    if (haveOdd) return findEven(withoutFirst);
    return integers[0];
  }
}


findOutlier([0, 1, 2]); //, 1)
findOutlier([1, 2, 3]); //, 2)
findOutlier([2, 6, 8, 10, 3]); //, 3)
findOutlier([0, 0, 3, 0, 0]); //, 3)
findOutlier([1, 1, 0, 1, 1]); //, 0)

findOutlier([194296282, -61714685, -21284193, 97852357, -64888337, 114511495, -51050521, -4515487, -66565281, 74997397, -121224115]);