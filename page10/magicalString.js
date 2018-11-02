/**
* Magical String
* https://leetcode.com/problems/magical-string/
*/

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n === 0) return 0;
  if (n < 4) return 1;
  let nums = [1, 2, 2];
  let idx = 2;
  let isOne = true;
  
  while (nums.length < n) {
    let num = isOne ? 1 : 2;
    for (let i = 0; i < nums[idx]; i ++) {
      nums.push(num);
    }
    idx ++;
    isOne = !isOne;
  }
  nums.length = n;
  let count = 0;
  for (let i = 0; i < n; i ++) {
    if (nums[i] === 1) count ++;
  }
  return count;
};
