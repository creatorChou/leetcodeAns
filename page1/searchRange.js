/**
* Search for a Range
* https://leetcode.com/problems/search-for-a-range/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let l = 0;
  let r = nums.length;
  let mid;
  let p = -1;
  while (l < r) {
    if (nums[l] === target) {
      p = l;
      break;
    } else if (nums[r] === target) {
      p = r;
      break;
    }
    mid = Math.floor((l + r) / 2);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      p = mid;
      break;
    }
  }
  if (p === -1) {
    return [-1, -1];
  }

  let start = p;
  let end = p;
  let startFound = false;
  let endFound = false;
  while (!startFound || !endFound) {
    if (!startFound) {
      if (nums[start - 1] === nums[p]) {
        start --;
      } else {
        startFound = true;
      }
    }
    if (!endFound) {
      if (nums[end + 1] === nums[p]) {
        end ++;
      } else {
        endFound = true;
      }
    }
  }
  return [start, end];
};

console.log(searchRange([2, 2], 6))
