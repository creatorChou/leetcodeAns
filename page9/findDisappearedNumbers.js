/**
* 448. Find All Numbers Disappeared in an Array
* https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  let arr = new Array(len);
  for (let i = 0; i < len; i ++) {
    arr[nums[i] - 1] = true;
  }
  let idx = 0;
  for (let i = 0; i < len; i ++) {
    if (!arr[i]) {
      arr[idx] = i + 1;
      idx ++;
    }
  }
  arr.length = idx;
  return arr;
};

// beat 98.39%!
