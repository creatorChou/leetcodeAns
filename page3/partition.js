/**
* 131. Palindrome Partitioning
* https://leetcode.com/problems/palindrome-partitioning/description/
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];

  backtrack(result, s, [], 0, 0);

  return result;

};

var backtrack = function(result, s, arr, start, len) {
  // console.log(arr);
  if (len === s.length) {
    result.push(arr.slice());
    return;
  }
  let str, l, r, isPalindrome;
  for (let i = start + 1; i <= s.length; i ++) {
    str = s.slice(start, i);
    l = 0;
    r = str.length - 1,
    isPalindrome = true;
    while(l < r) {
      if (str[l] !== str[r]) {
        isPalindrome = false;
        break;
      }
      l ++;
      r --;
    }
    if (isPalindrome) {
      arr.push(str);
      backtrack(result, s, arr, i, len + str.length);
      arr.pop();
    }
  }
}

console.log(partition("aabaa"));
