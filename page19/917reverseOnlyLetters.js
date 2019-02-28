/**
* 917. Reverse Only Letters
* https://leetcode.com/problems/reverse-only-letters/
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let l = 0, r = S.length - 1;
  let arr = new Array(S.length);
  while (l <= r) {
    let isLeftLetter = /[a-zA-Z]/.test(S[l]);
    let isRightLetter = /[a-zA-Z]/.test(S[r]);
    if (isLeftLetter && isRightLetter) {
      arr[l] = S[r];
      arr[r] = S[l];
      l ++;
      r --;
    } else if (isLeftLetter && !isRightLetter) {
      arr[r] = S[r];
      r --;
    } else if (!isLeftLetter && isRightLetter) {
      arr[l] = S[l];
      l ++;
    } else {
      arr[l] = S[l];
      arr[r] = S[r];
      l ++;
      r --;
    }
  }
  return arr.join("");
};

// Runtime: 60 ms, faster than 54.63% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 34 MB, less than 61.54% of JavaScript online submissions for Reverse Only Letters.
