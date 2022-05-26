// Rewrite with async/await.

'use strict';

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new HttpError(response);
  }
}


// Ask for a login until github returns an existing user.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Enter a login', 'ZhenyaGro');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // There is no errors. Get out from the cycle.
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('The user does not exist, please try again.');
      } else {
        throw err;
      }
    }
  }

  alert(`Fullname: ${user.name}.`);
  return user;
}

demoGithubUser();