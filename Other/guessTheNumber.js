'use strict';

class Pc {
  _secretNumber;

  constructor() {
    this._secretNumber = Math.round(Math.random() * (10000 - 1000) + 1000);
    console.log(this._secretNumber);
  }

  askNumber() {
    return +prompt('Input number: ');
  }

  checkNumber(userNumber) {
    if (userNumber > this._secretNumber)
      return -1;
    else if (userNumber < this._secretNumber)
      return 1;
    else return 0;
  }

  makeHint(checkingResult) {
    switch (checkingResult) {
      case 1:
        alert('Higher!');
        break;

      case -1:
        alert('Lower!');
        break;

      case 0:
        alert('You win!');
        break;

      default:
        alert('Something went wrong.');
        break;
    }
  }

  getSecret() {
    return this._secretNumber;
  }
}

class App {
  _gameStatus = false;
  _bot;

  constructor() {
    this._bot = new Pc();
  }

  start() {
    do {
      this._gameStatus = this._bot.checkNumber(this._bot.askNumber());
      this._bot.makeHint(this._gameStatus);
    } while (this._gameStatus)
    alert('The number is ' + this._bot.getSecret());
  }
}

const app = new App();
app.start();