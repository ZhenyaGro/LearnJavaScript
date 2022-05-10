/*
Create FormatError class
that inherits the built-in SyntaxError class.
The class should support
"message", "name" and "stack" properties.
*/

'use strict';

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = 'Format error';
  }
}

let err = new FormatError('Format error');

alert(err.message); // Format error
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true. Inherits SyntaxError