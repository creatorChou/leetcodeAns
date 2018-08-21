/**
* 303. Range Sum Query - Immutable
* https://leetcode.com/problems/range-sum-query-immutable/description/
*/

class NumArray {

  constructor (nums) {
    this.nums = nums;
    this.dp = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i ++) {
      sum += nums[i];
      this.dp[i] = sum;
    }
  }

  sumRange (i, j) {
    console.log(this.dp)
    return this.dp[j] - this.dp[i] + this.nums[i];
  }

}

let numArr = new NumArray([-2,0,3,-5,2,-1]);

console.log(numArr.sumRange(0, 2));
console.log(numArr.sumRange(2, 5));
console.log(numArr.sumRange(0, 5));
