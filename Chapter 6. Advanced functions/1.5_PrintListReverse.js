// Output the list reverse.

'use strict';

function cyclePrintList(list) {
  let tmp = list;
  let arr = [];

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  arr.reverse();
  for (let val of arr) alert(val);
}


function recursionPrintList(list) {
  if (list.next) {
    recursionPrintList(list.next);
  }
  alert(list.value);
}


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

cyclePrintList(list);
recursionPrintList(list);