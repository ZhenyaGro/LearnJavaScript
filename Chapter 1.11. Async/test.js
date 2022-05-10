// How to download a script?

'use strict';

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript('./Chapter 1.10. Catch errors/1.1.autor_Finally.js'/*callback: , function() {}*/);