/**
* Sliding Window Median
* https://leetcode.com/problems/sliding-window-median/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  if (!nums || !nums.length || k === 0) return [];
  if (k === 1) return nums;
  if (nums.length <= k) return [getMedian(nums.sort((a, b) => a - b))];
  let window = nums.slice(0, k);
  let sortedWindow = window.slice().sort((a, b) => a - b);
  let result = [getMedian(sortedWindow)];
  for (let i = k; i < nums.length; i ++) {
    window.push(nums[i]);
    let outNum = window.shift();
    let outNumIdx = searchIdx(sortedWindow, outNum);
    sortedWindow[outNumIdx] = nums[i];
    if (sortedWindow[outNumIdx] < sortedWindow[outNumIdx - 1]) {
      while (outNumIdx > 0 && sortedWindow[outNumIdx] < sortedWindow[outNumIdx - 1]) {
        sortedWindow[outNumIdx] ^= sortedWindow[outNumIdx - 1];
        sortedWindow[outNumIdx - 1] ^= sortedWindow[outNumIdx];
        sortedWindow[outNumIdx] ^= sortedWindow[outNumIdx - 1];
        outNumIdx --;
      }
    } else if (sortedWindow[outNumIdx] > sortedWindow[outNumIdx + 1]) {
      while (outNumIdx < k - 1 && sortedWindow[outNumIdx] > sortedWindow[outNumIdx + 1]) {
        sortedWindow[outNumIdx] ^= sortedWindow[outNumIdx + 1];
        sortedWindow[outNumIdx + 1] ^= sortedWindow[outNumIdx];
        sortedWindow[outNumIdx] ^= sortedWindow[outNumIdx + 1];
        outNumIdx ++;
      }
    }
    result.push(getMedian(sortedWindow));
  }
  return result;
};

function getMedian (arr) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
}

function searchIdx (arr, num) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (arr[l] === num) return l;
    if (arr[r] === num) return r;
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < num) {
      l = mid + 1;
    } else if (arr[mid] > num) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7],4));
