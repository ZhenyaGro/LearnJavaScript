const array1 = [1, 2, 3, 4, 3, 2, 4];
const array2 = [171, 164, 181, 96, 41, 111, 86, 105, 154, 34, 120, 121, 117, 244, 165, 247, 61, 109, 82, 4];

function isSorter(array) {
  for (let i = 1; i < array.length; i++)
    if (array[i] < array[i - 1])
      return false;

  return true;
}

function quicksort(array) {
  if (array.length < 2)
    return array;

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const less = array.filter(value => value < pivot);
  const equal = array.filter((value, index) => value == pivot && index == pivotIndex);
  const more = array.filter(value => value > pivot);

  return [
    ...quicksort(less),
    pivot,
    ...equal,
    ...quicksort(more)
  ];
}

console.log(quicksort(array1));