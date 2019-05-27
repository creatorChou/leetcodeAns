/**
* 1031. Maximum Sum of Two Non-Overlapping Subarrays
* https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
*/

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  let sums = [];
  let sum = 0;
  let n = A.length;
  for (let i = 0; i < n; i ++) {
    sum += A[i];
    sums.push(sum);
  }
  let memoL = [];
  let memoM = [];
  for (let i = 0; i < n; i ++) {
    memoL.push(getSum(sums, i - L, i));
    memoM.push(getSum(sums, i - M, i));
  }
  let max = 0;
  for (let i = 0; i < n; i ++) {
    let prev = i - L;
    if (prev < 0) prev = 0;
    let maxVal = 0;
    for (let j = 0; j < prev; j ++) {
      maxVal = Math.max(maxVal, memoM[j]);
    }
    for (let j = i + M; j < n; j ++) {
      maxVal = Math.max(maxVal, memoM[j]);
    }
    max = Math.max(memoL[i] + maxVal, max);
  }
  return max;
};

function getSum(sums, prev, curr) {
  if (prev < 0) return sums[curr];
  return sums[curr] - sums[prev];
}

let L = 1;
let M = 2;
let A = [0,6,5,2,2,5,1,9,4];

console.log(maxSumTwoNoOverlap(A, L, M));

// Runtime: 60 ms, faster than 96.88% of JavaScript online submissions for Maximum Sum of Two Non-Overlapping Subarrays.
// Memory Usage: 36.1 MB, less than 36.89% of JavaScript online submissions for Maximum Sum of Two Non-Overlapping Subarrays.
