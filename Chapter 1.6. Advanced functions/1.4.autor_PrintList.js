/*
We have a singly linked list.
Write a printList(list) function that returns the elements of list by one.
Make two solutions: using a cycle and through recursion.
*/

'use strict';

function cyclePrintList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

function recursionPrintList(list) {
  alert(list.value);

  if (list.next) {
    recursionPrintList(list.next);
  }
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