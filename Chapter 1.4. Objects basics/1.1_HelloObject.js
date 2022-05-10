/*
Write the code by completing the task:
1. Create an empty user object.
2. Add a name property with a value of John.
3. Add a surname property with a value of Smith.
4. Change the value of the name property to Pete.
5. Remove the name property from the object.
*/

'use strict';

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;