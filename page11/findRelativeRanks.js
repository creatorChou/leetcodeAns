/**
* 506. Relative Ranks
* https://leetcode.com/problems/relative-ranks/
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let indices = [];
  for (let i = 0; i < nums.length; i ++) {
    indices[i] = i;
  }
  mergeSort(nums, indices, 0, nums.length - 1);
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    let rank;
    switch (i) {
      case 0:
        rank = "Gold Medal";
        break;
      case 1:
        rank = "Silver Medal";
        break;
      case 2:
        rank = "Bronze Medal";
        break;
      default:
        rank = String(i + 1);
        break;
    }
    result[indices[i]] = rank;
  }
  return result;
};

function mergeSort (arr1, arr2, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr1, arr2, start, mid);
  mergeSort(arr1, arr2, mid + 1, end);
  merge(arr1, arr2, start, mid, end);
}

function merge (arr1, arr2, start, mid, end) {
  let container1 = [],
    container2 = [],
    l = start,
    r = mid + 1;

  while (container1.length < end - start + 1) {
    if (l === mid + 1) {
      container1.push(arr1[r]);
      container2.push(arr2[r]);
      r ++;
    } else if (r === end + 1) {
      container1.push(arr1[l]);
      container2.push(arr2[l]);
      l ++;
    } else {
      if (arr1[l] > arr1[r]) {
        container1.push(arr1[l]);
        container2.push(arr2[l]);
        l ++;
      } else {
        container1.push(arr1[r]);
        container2.push(arr2[r]);
        r ++;
      }
    }
  }
  for (let i = start, j = 0; i <= end; i ++, j ++) {
    arr1[i] = container1[j];
    arr2[i] = container2[j];
  }
}


function findRelativeRanks2 (nums) {
  let keyMap = {};
  for (let i = 0; i < nums.length; i ++) {
    keyMap[nums[i]] = i;
  }
  nums.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    let rank;
    switch (i) {
      case 0:
        rank = "Gold Medal";
        break;
      case 1:
        rank = "Silver Medal";
        break;
      case 2:
        rank = "Bronze Medal";
        break;
      default:
        rank = String(i + 1);
        break;
    }
    result[keyMap[nums[i]]] = rank;
  }
  return result;
}
