/**
* 852. Peak Index in a Mountain Array
* https://leetcode.com/problems/peak-index-in-a-mountain-array/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let l = 0, r = A.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid - 1] < A[mid] && A[mid] < A[mid + 1]) {
      l = mid + 1;
    } else if (A[mid - 1] > A[mid] && A[mid] > A[mid + 1]) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
};
