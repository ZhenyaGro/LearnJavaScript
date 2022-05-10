/*
A setTimeout call is scheduled
and then performs a complex calculation
that takes over 100 ms to complete.

When will the scheduled function be completed?
1. After the cycle.
2. Before the cycle.
3. At the beginning of the cycle.
What will the "alert" show?
*/

let i = 0;

setTimeout(() => alert(i), 100); // ?

for (let j = 0; j < 100000000; j++) {
  i++;
}