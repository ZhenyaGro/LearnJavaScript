// Rewrite with async/await.
/*

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404

*/

'use strict';

async function loadJson(url) {
  let response = await fetch(url);
  if (response == 200) {
    return response.json();
  }
  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404