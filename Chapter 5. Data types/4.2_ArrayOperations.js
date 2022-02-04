/*
1. Create an array styles with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Change the value in the middle to Classic. Your code for finding the value in the middle should work for arrays of any length.
4. Remove the first element of the array and show it.
5. Insert "Rap" and "Reggae" at the beginning of the array.
*/

'use strict';

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
alert(styles.shift());
styles.unshift("Rap", "Reggae");