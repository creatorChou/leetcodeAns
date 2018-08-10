/**
* 258. Add Digits
* https://leetcode.com/problems/add-digits/description/
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let res = 0;
  while (num > 0) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  if (res >= 10) {
    return addDigits(res);
  } else {
    return res;
  }
};

var addDigits = function(num) {
  return num === 0 ? 0 : num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(2));
