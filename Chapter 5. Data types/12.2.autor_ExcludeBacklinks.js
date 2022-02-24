/*
Write a JSON transform replacer function that will remove properties that refer to meetup.
*/

'use strict';

let room = {
  number: 23
};

let meetup = {
  title: "Meeting",
  occupiedBy: [{ name: "Ivanov" }, { name: "Petrov" }],
  place: room
};

// backlinks
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  /* code */
  return (key != "" && value == meetup) ? undefined : value;
}));

/* as result must be:
{
  "title":"Meeting",
  "occupiedBy":[{"name":"Ivanov"},{"name":"Petrov"}],
  "place":{"number":23}
}
*/