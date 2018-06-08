/**
* Roman to Integer
* https://leetcode.com/problems/roman-to-integer/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let priceList = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let result = 0;
  s = s.replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");

  for (var i = 0; i < s.length; i++) {
    result += priceList[s[i]];
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
