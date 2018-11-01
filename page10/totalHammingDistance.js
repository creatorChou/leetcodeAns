/**
* Total Hamming Distance
* https://leetcode.com/problems/total-hamming-distance/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let sum = 0;
  for (let i = 0; i < 32; i ++) {
    let count0 = 0;
    let count1 = 0;
    for (let j = 0; j < nums.length; j ++) {
      if ((nums[j] >> i & 1) === 0) {
        count0 ++;
      } else {
        count1 ++;
      }
    }
    sum += count0 * count1;
  }
  return sum;
};
