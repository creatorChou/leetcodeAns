/**
* Letter Combinations of a Phone Number
* https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let letterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  let strings = [letterMap[digits[0]]];

  let currLetters, beforeStrings, currStrings,
      i, j, k, str;
  for (i = 1; i < digits.length; i ++) {
    currLetters = letterMap[digits[i]];
    currStrings = [];
    beforeStrings = strings[strings.length - 1]
    for (j = 0; j < currLetters.length; j ++) {
      for (k = 0; k < beforeStrings.length; k ++) {
        str = beforeStrings[k] + currLetters[j];
        currStrings.push(str);
      }
    }
    strings.push(currStrings);
  }

  return strings[strings.length - 1];
};

console.log(letterCombinations("792"));
