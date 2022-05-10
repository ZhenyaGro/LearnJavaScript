/* 
Replace the Function Expression code with an arrow function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Are you sure?",
  function() { alert("Are you sure?"); },
  function() { alert("Cancelled."); }
);

*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Are you sure?",
  () => alert("You sure."),
  () => alert("Cancelled.")
);