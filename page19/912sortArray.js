/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // quickSort(nums, 0, nums.length - 1);
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, lo, hi) {
  if (lo >= hi) return;
  let pivot = nums[hi];
  let i = lo;
  let temp;
  for (let j = lo; j < hi; j ++) {
    if (nums[j] < pivot) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i ++;
    }
  }
  temp = nums[i];
  nums[i] = nums[hi];
  nums[hi] = temp;
  quickSort(nums, lo, i - 1);
  quickSort(nums, i + 1, hi);
}

console.log(sortArray([5,1,1,2,0,0]));
console.log(sortArray([3,1,1,2,0,0,8,2,6,3,32,65,7,35,78,32,11]));

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Sort an Array.
// Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions for Sort an Array.


function mergeSort(nums, lo, hi) {
  if (lo >= hi) return;
  let mid = Math.floor((lo + hi) / 2);
  mergeSort(nums, lo, mid);
  mergeSort(nums, mid + 1, hi);
  merge(nums, lo, mid, hi);
}

function merge (nums, lo, mid, hi) {
  let temp = [];
  let i = lo, j = mid + 1;
  while (i <= mid && j <= hi) {
    if (nums[i] < nums[j]) {
      temp.push(nums[i]);
      i ++;
    } else {
      temp.push(nums[j]);
      j ++;
    }
  }
  while (i <= mid) {
    temp.push(nums[i]);
    i ++;
  }
  while (j <= hi) {
    temp.push(nums[j]);
    j ++;
  }
  for (let k=lo, d=0; k<=hi; k++, d++) {
    nums[k] = temp[d];
  }
}

// Runtime: 112 ms, faster than 59.65% of JavaScript online submissions for Sort an Array.
// Memory Usage: 45.3 MB, less than 100.00% of JavaScript online submissions for Sort an Array.
