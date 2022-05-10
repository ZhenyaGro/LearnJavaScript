/*
Change the code so that it can be called in a chain, like so:
ladder.up().up().down().showStep(); // 1
*/

'use strict';

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  }
};

/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
*/

ladder.up().up().down().showStep();