// Find sum of elements between min and max.

'use strict';

let array = [1, 3, 4, 5, 3];
let index = 0;
let min = [array[0], 0];
let max = [array[0], 0];
let sum = 0;

while (index != array.length - 1) {
  if (min[0] > array[index]) min = [array[index], index];
  if (max[0] < array[index]) max = [array[index], index];
  index++;
}

index = min[1];

while (index != max[1]) {
  sum += array[index];
  index++;
}

alert(sum);