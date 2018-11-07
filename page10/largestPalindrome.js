/**
* Largest Palindrome Product
* https://leetcode.com/problems/largest-palindrome-product/
*/

/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  let num1 = Math.pow(10, n) - 1;
  let num2 = Math.pow(10, n) - 1;
  let p = 1;
  for (let i = 1; i <= num1; i ++) {
    for (let j = 1; j <= num2; j ++) {
      let product = num1 * num2;
      if (isPalindrome(String(product))) {
        p = Math.max(p, product);
      }
    }
  }
  return p % 1337;
};

function isPalindrome(str) {
  let l = 0, r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l ++;
    r --;
  }
  return true;
}
