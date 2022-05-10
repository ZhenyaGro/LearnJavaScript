/*
Write a function "Accumulator(startingValue)".

The object it creates must be able to:

Store the "current value" in the value property. The starting value is set in the startingValue constructor argument.
The read() method uses prompt to get a number and adds it to the value property.
The value property is the running sum of everything the user has entered in calls to the read() method, given the initial value of startingValue.
*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('How many needs to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);