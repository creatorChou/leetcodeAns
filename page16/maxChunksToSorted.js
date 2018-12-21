/**
* 769. Max Chunks To Make Sorted
* https://leetcode.com/problems/max-chunks-to-make-sorted/
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let max = arr[0];
  let i = 0;
  let count = 1;
  while (max < arr.length - 1) {
    for (; i <= max; i ++) {
      max = Math.max(arr[i], max);
    }
    max = arr[i];
    if (i < arr.length) {
      count ++;
    }
  }
  return count;
};


var maxChunksToSorted = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i -1], arr[i]);
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr[i]) {
      count++;
    }
  }
  return count;
};
