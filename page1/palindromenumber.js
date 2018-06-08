/**
* Palindrome Number
* https://leetcode.com/problems/palindrome-number/description/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || x > 2147483647) return false;
  let palindrome = 0,
      num = x;
  while(num>0) {
    palindrome = palindrome * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return palindrome === x;
};

console.log(isPalindrome(12111))
