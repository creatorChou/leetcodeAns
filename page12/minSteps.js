/**
* 650. 2 Keys Keyboard
* https://leetcode.com/problems/2-keys-keyboard/
*/

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let count = 0;
  while (n > 1) {
    let i = 2;
    while (n % i !== 0) {
      i ++;
    }
    n /= i;
    count += i;
  }
  return count;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for 2 Keys Keyboard.
