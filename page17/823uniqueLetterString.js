/**
* 828. Unique Letter String
* https://leetcode.com/problems/unique-letter-string/
*/

/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function(S) {
  let map = {};
  for (let i = 0; i < S.length; i ++) {
    if (map[S[i]] != null) {
      map[S[i]].push(i);
    } else {
      map[S[i]] = [i];
    }
  }
  let mod = Math.pow(10, 9) + 7;
  let sum = 0;
  for (let k in map) {
    let arr = map[k];
    let prevLen = arr[0];
    let charSum = 0;
    for (let i = 0; i < arr.length; i ++) {
      let prevIdx = i === 0 ? -1 : arr[i - 1];
      let prev = arr[i] - prevIdx;
      let backIdx = i === arr.length - 1 ? S.length : arr[i + 1];
      let back = backIdx - arr[i];
      charSum += prev * back;
    }
    charSum %= mod;
    sum += charSum;
  }
  return sum % mod;
};

// Runtime: 88 ms, faster than 50.00% of JavaScript online submissions for Unique Letter String.
