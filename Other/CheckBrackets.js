// Function checks that number of "(" is equal to number of ")".

function checkBrackets(str) {
  let number = 0;

  for (let letter of str) {
    letter == '(' ? number += 1 : number -= 1;
  }

  return number == 0 ? true : false;
}

checkBrackets('(((()))');