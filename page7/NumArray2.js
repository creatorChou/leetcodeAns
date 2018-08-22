/**
* 307. Range Sum Query - Mutable
* https://leetcode.com/problems/range-sum-query-mutable/description/
*/

class NumArray {

  /**
   * @param {number[]} nums
   */
  constructor (nums) {
    this.nums = nums;
    this.dp = new Array(nums.length);
    let sum = 0;
    for (let i = 0; i < nums.length; i ++) {
      sum += nums[i];
      this.dp[i] = sum;
    }
  }

  /** 
   * @param {number} i 
   * @param {number} val
   * @return {void}
   */
  update (i, val) {
    let diff = val - this.nums[i];
    this.nums[i] = val;
    for (; i < this.dp.length; i ++) {
      this.dp[i] += diff;
    }
  }

  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  sumRange (i, j) {
    return this.dp[j] - this.dp[i] + this.nums[i];
  };

}
