let bag = {
  apple: 5,
  orange: 3
};

let fruit = prompt(`What the name of fruit ` +
  `which you want to buy?`, "apple");
let numberOfFruit = prompt(`How many ${fruit}(s) ` +
  `do you want to buy?`, 5);

if (checkProperty(fruit)) {
  plusFruit(bag[fruit], numberOfFruit);
} else {
  bag[fruit] = numberOfFruit;
}

alert(fruit + " " + bag[fruit]);

// Functions ---

function plusFruit(currentNum, buyNum) {
  bag[fruit] = +currentNum + +buyNum;
}

function checkProperty(propName) {
  return propName in bag;
}