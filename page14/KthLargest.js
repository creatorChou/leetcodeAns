/**
* 703. Kth Largest Element in a Stream
* https://leetcode.com/problems/kth-largest-element-in-a-stream/
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  nums.sort((a, b) => a - b);
  this.arr = nums;
  this.k = k - 1;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let arr = this.arr;
  let l = 0, r = arr.length - 1;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */
