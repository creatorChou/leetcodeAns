/**
* 315. Count of Smaller Numbers After Self
* https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let count;
var countSmaller = function(nums) {
  let indices = [];
  count = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i ++) {
    indices[i] = i;
  }
  _mergeSort(nums, indices, 0, nums.length - 1);

  console.log(nums);
  console.log(indices);
  console.log(count);
};

function _mergeSort(nums, indices, start, end) {
  if (end <= start) return;

  let mid = Math.floor((start + end) / 2);
  _mergeSort(nums, indices, start, mid);
  _mergeSort(nums, indices, mid + 1, end);

  merge(nums, indices, start, mid, end);
}

function merge(nums, indices, start, mid, end) {
  let l = start,
      r = mid + 1,
      numsContainer = [],
      indicesContainer = [],
      rightCount = 0;

  while (numsContainer.length < end - start + 1) {
    if (l === mid + 1) {
      numsContainer.push(nums[r]);
      indicesContainer.push(indices[r]);
      r ++;
    } else if (r === end + 1) {
      numsContainer.push(nums[l]);
      indicesContainer.push(indices[l]);
      l ++;
    } else {
      if (nums[l] < nums[r]) {
        numsContainer.push(nums[l]);
        indicesContainer.push(indices[l]);
        count[indices[l]] += rightCount;
        rightCount = 0;
        l ++;
      } else {
        numsContainer.push(nums[r]);
        indicesContainer.push(indices[r]);
        rightCount ++;
        r ++;
      }
    }
  }

  for (let i = 0, j = start; i < numsContainer.length; i ++, j ++) {
    nums[j] = numsContainer[i];
    indices[j] = indicesContainer[i];
  }
}

countSmaller([5,2,6,1]);
