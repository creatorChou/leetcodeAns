/**
* Reverse Integer
* https://leetcode.com/problems/reverse-integer/description/
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 10 && x > -10) return x;
  if (x > Math.pow(2, 31) - 1 || x < - Math.pow(2, 31)) {
    return 0;
  }
  let isMinus = x < 0;
  x = parseInt((Math.abs(x) + "").split("").reverse().join(""));
  return isMinus ? -x : x;
};

let intNum = reverse(-543212213323234);

console.log(intNum);
