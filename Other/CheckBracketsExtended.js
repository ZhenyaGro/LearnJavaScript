// Function checks that number of "(", "{", "[" is equal to number of ")", "}", "]".

function checkBrackets(str) {
  let bracketsTypes = {
    '(': 0,
    '{': 0,
    '[': 0,
    ')': 0,
    '}': 0,
    ']': 0
  };

  for (let letter of str) {
    if (letter == '(' || letter == '{' || letter == '[') {
      bracketsTypes[letter] += 1;
    } else {
      bracketsTypes[letter] -= 1;
    }
  }

  let result1 = bracketsTypes['('] + bracketsTypes[')'];
  let result2 = bracketsTypes['{'] + bracketsTypes['}'];
  let result3 = bracketsTypes['['] + bracketsTypes[']'];

  if (!result1 && !result2 && !result3) {
    return true;
  }
  return false;
}

checkBrackets('({[)}]'); // True
checkBrackets('({[)]'); // False