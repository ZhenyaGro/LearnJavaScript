/*
We need a circle with a text into it.
The text should be shown after circle's animation.
*/

'use strict';

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 0);

  div.addEventListener('transitionend', () => callback(div));
  div.removeEventListener('transitionend', () => callback(div));
}