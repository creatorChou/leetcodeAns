/**
* 1013. Partition Array Into Three Parts With Equal Sum
* https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let n = A.length;
  let memo = new Array(n);
  let sum = 0;
  for (let i = 0; i < n; i ++) {
    sum += A[i];
    memo[i] = sum;
  }
  for (let i = 0; i < n - 2; i ++) {
    for (let j = i + 1; j < n - 1; j ++) {
      if (memo[i] === memo[j] - memo[i] && sum - memo[j] === memo[i]) {
        return true;
      }
    }
  }
  return false;
};

// let arr = [0,2,1,-6,6,-7,9,1,2,0,1];  // true
// let arr = [0,2,1,-6,6,7,9,-1,2,0,1];  // false
let arr = [3,3,6,5,-2,2,5,1,-9,4];     // true

console.log(canThreePartsEqualSum(arr));

// Runtime: 2052 ms, faster than 5.22% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 40.7 MB, less than 17.31% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
