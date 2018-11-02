/**
* 3Sum
* https://leetcode.com/problems/3sum/description/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length <= 2) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  for (let l = 0; l < nums.length - 1; l ++) {
    let sum = nums[l] + nums[nums.length - 1];
    if (nums[l] > 0 && sum > 0) break;
    while (nums[l] === nums[l - 1]) l ++;
    for (let r = nums.length - 1; r > l; r --) {
      while (nums[r] === nums[r + 1]) r --;
      if (r <= l) break;
      let target = - (nums[l] + nums[r]);
      let idx = binary(nums, l + 1, r - 1, target);
      if (idx !== l && idx !== r && nums[idx] === target) {
        result.push([nums[l], nums[idx], nums[r]]);
      }
    }
  }
  return result;
};

function binary(nums, l, r, target) {
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return r;
}

console.log(threeSum([3,0,3,2,-4,0,-3,2,2,0,-1,-5]));

// 480 ms
