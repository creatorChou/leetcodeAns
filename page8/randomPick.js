/**
* 398. Random Pick Index
* https://leetcode.com/problems/random-pick-index/description/
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = {};
  for (let i = 0; i < nums.length; i ++) {
    if (this.map[nums[i]]) {
      this.map[nums[i]].push(i);
    } else {
      this.map[nums[i]] = [i];
    }
  }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  let arr = this.map[target];
  let rand = Math.trunc(Math.random() * arr.length);
  return arr[rand];
};

