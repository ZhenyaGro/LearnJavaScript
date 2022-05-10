'use strict';

function f() {
  try {
    alert('Start');
    return 'result';
  } catch (e) {
    ///
  } finally {
    alert('Clean');
  }
}

f(); // Clean

function f() {
  try {
    alert('Start');
    throw new Error("Error");
  } catch (e) {
    // ...
    if ("Can't catch the error") {
      throw e;
    }

  } finally {
    alert('Clean!')
  }
}

f(); // Clean!