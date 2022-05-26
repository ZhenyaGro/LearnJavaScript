// Rewrite with async/await.

'use strict';

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Ask for a login until github returns an existing user.
function demoGithubUser() {
  let name = prompt('Enter a login', 'ZhenyaGro');

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Fullname: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('The user does not exist, please try again.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();