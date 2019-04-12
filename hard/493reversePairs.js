/**
* 493. Reverse Pairs
* https://leetcode.com/problems/reverse-pairs/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0;
  for(let i=nums.length-1; i>=1; i--) {
    for(let j=i-1; j>=0; j--) {
      if(nums[j] > 2 * nums[i]) {
        count ++;
      }
    }
  }
  return count;
};

// brute force, time limit exceeded..
