// Will the value change after using "bind"? 

'use strict';

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Vasya'
});

alert(bound.test); 