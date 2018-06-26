/**
* 81. Search in Rotated Sorted Array II
* http://web.fxsp.com/sp-web/develop/#apps
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let l = 0,
      r = nums.length - 1,
      mid, i;
  while (l <= r) {
    if (nums[l] === target || nums[r] === target) {
      return true;
    }
    mid = Math.floor((l + r) / 2);
    console.log(mid)
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] === nums[mid + 1] && nums[mid] === nums[mid - 1]) {
      for (i = l + 1; i < r; i ++) {
        if (nums[i] === target) {
          return true;
        }
      }
      return false;
    }
    if (nums[mid - 1] > nums[mid]) {
      if (target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[r] > target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;
};

console.log(search([1,1,3,1], 3));
