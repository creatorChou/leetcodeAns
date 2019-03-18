/**
* 930. Binary Subarrays With Sum
* https://leetcode.com/problems/binary-subarrays-with-sum/
*/

// In an array A of 0s and 1s, how many non-empty subarrays have sum S?

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let preZero = 0;
  let afterZero = 0;
  let count = 0;
  for (; end < A.length; end ++) {
    sum += A[end];
    if (sum === S) {
      if (A[end] === 0) {
        afterZero ++;
      }
    } else if (sum === S + 1) {
      preZero = 0;
      while (A[start] === 0) {
        preZero ++;
        start ++;
      }
      sum --;
      start ++;
      count += (preZero + 1) * (afterZero + 1);
      afterZero = 0;
    }
  }
  if (sum === S) {
    preZero = 0;
    while (A[start] === 0) {
      preZero ++;
      start ++;
    }
    count += (preZero + 1) * (afterZero + 1);
  }
  return count;
};

function numSubarraysWithSum2 (A, S) {
  let oneIdx = [-1];
  for (let i = 0; i < A.length; i ++) {
    if (A[i] === 1) {
      oneIdx.push(i);
    }
  }
  oneIdx.push(A.length);
  let count = 0;
  if (S === 0) {
    for (let i = 1; i < oneIdx.length; i ++) {
      let n = oneIdx[i] - oneIdx[i - 1] - 1;
      count += (1 + n) * n / 2;
    }
    return count;
  }
  let i = 1, j = S;
  for (; j < oneIdx.length - 1; i++, j++) {
    let prev = oneIdx[i] - oneIdx[i-1];
    let after = oneIdx[j+1] - oneIdx[j];
    count += prev * after;
  }
  return count;
}

console.log(numSubarraysWithSum2([1,0,1,0,1], 2));

// Runtime: 76 ms, faster than 91.30% of JavaScript online submissions for Binary Subarrays With Sum.
// Memory Usage: 38.4 MB, less than 50.00% of JavaScript online submissions for Binary Subarrays With Sum.


