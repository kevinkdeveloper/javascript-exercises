const reverseString = function(reversedString) {
  let splitString = reversedString.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
