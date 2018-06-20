/**
* 60. Permutation Sequence
* https://leetcode.com/problems/permutation-sequence/description/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let nums = [];
  let allTimes = 1;
  for (let i = 1; i <= n; i ++) {
    nums.push(i);
    allTimes *= i;
  }
  let index;
  let str = "";
  k --;
  while (nums.length > 0) {
    allTimes /= nums.length;
    index = Math.floor(k / allTimes);
    str += nums.splice(index, 1);
    k = k - index * allTimes;
  }
  return str;
};

console.log(getPermutation(4, 2));
