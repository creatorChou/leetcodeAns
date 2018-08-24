/**
* 342. Power of Four
* https://leetcode.com/problems/power-of-four/description/
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return 2147483648 % num === 0 && 2863311530 & num === 0;
};

// the binary code of 2863311530 is 10101010101010101010101010101010, it filtered out Math.pow(2, x) when x is odd;

// others
var isPowerOfFour = function(num) {
    var r = new RegExp("^1(00)*$");
    return r.test(num.toString(2))
};
