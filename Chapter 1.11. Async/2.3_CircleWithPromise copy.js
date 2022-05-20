/*
Rewrite showCircle function
with a callback task to return a promise
instead of taking a callback function as agruments.
*/

'use strict';

function start() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append('Hello, world!');
  })
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', () => resolve(div), { once: true });
    }, 0);
  })
}