/**
* 658. Find K Closest Elements
* https://leetcode.com/problems/find-k-closest-elements/
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] > x) {
      r = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    } else {
      r = mid;
      break;
    }
  }
  let idx = r >= arr.length ? arr.length - 1 : r < 0 ? 0 : r;
  let result = [arr[idx]];
  let pre = idx - 1;
  let back = idx + 1;
  while (result.length < k) {
    if (pre >= 0 && back < arr.length) {
      let preDiff = Math.abs(arr[pre] - x);
      let backDiff = Math.abs(arr[back] - x);
      if (preDiff > backDiff) {
        result.push(arr[back]);
        back ++;
      } else {
        result.unshift(arr[pre]);
        pre --;
      }
    } else if (pre < 0) {
      result.push(arr[back]);
      back ++;
    } else {
      result.unshift(arr[pre]);
      pre --;
    }
  }
  return result;
};
