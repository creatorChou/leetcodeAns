/**
* 315. Count of Smaller Numbers After Self
* https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let indices = [];
  for (let i = 0; i < nums.length; i ++) {
    indices[i] = i;
  }
  _mergeSort(nums, indices, 0, nums.length - 1)
};

function _mergeSort(nums, indices, start, end) {
  if (end <= start) return;

  let mid = Math.floor((start + end) / 2);
  _mergeSort(nums, indices, start, mid);
  _mergeSort(nums, indices, mid + 1, end);

  merge(nums, indices, start, mid, end);
}

function merge(nums, indices, start, mid, end) {
  
}