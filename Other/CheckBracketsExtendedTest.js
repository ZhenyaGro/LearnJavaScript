// Function checks that number of "(", "{", "[" is equal to number of ")", "}", "]".

function checkBrackets(str) {
  let bracketsTypes = {
    'circle': 0,
    'figure': 0,
    'square': 0,
  };

  for (let letter of str) {
    letter == '(' ? bracketsTypes.circle++ :
      letter == ')' ? bracketsTypes.circle-- :
        letter == '{' ? bracketsTypes.figure++ :
          letter == '}' ? bracketsTypes.figure-- :
            letter == '[' ? bracketsTypes.square++ :
              letter == ']' ? bracketsTypes.square-- : null;
  }

  if (!bracketsTypes.circle &&
    !bracketsTypes.figure &&
    !bracketsTypes.square) {
    return true;
  }
  return false;
}

checkBrackets('({[)}]'); // True
checkBrackets('({[)]'); // False