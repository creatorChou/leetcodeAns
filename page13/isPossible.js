/**
* 659. Split Array into Consecutive Subsequences
* https://leetcode.com/problems/split-array-into-consecutive-subsequences/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  if (!nums || nums.length < 3) return false;
  let consecutives = [];
  let lacks = [];
  while (nums.length > 0) {
    let temp = [];
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i ++) {
      let target = arr[arr.length - 1] + 1;
      if (nums[i] === target) {
        arr.push(nums[i]);
      } else {
        temp.push(nums[i]);
      }
    }
    if (arr.length < 3) {
      lacks.push(arr);
    } else {
      consecutives.push(arr);
    }
    nums = temp;
  }
  for (let arr of lacks) {
    let prev = arr[0] - 1;
    let after = arr[arr.length - 1] + 1;
    let found = false;
    for (let i = 0; i < consecutives.length; i ++) {
      if(consecutives[i][0] === after || consecutives[i][consecutives[i].length - 1] === prev) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
};
