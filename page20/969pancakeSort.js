/**
* 969. Pancake Sorting
* https://leetcode.com/problems/pancake-sorting/
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  let sortIdx = A.length - 1;
  let k = 0;
  let ans = [];
  while (sortIdx > 0) {
    let maxIdx = 0;
    for (let i = 1; i <= sortIdx; i ++) {
      if (A[i] > A[maxIdx]) maxIdx = i;
    }
    if (maxIdx !== sortIdx) {
      ans.push(maxIdx + 1);
      ans.push(sortIdx + 1);
      let l = 0;
      let r = maxIdx;
      while(l < r) {
        A[l] ^= A[r];
        A[r] ^= A[l];
        A[l] ^= A[r];
        l ++;
        r --;
      }
      l = 0;
      r = sortIdx;
      while(l < r) {
        A[l] ^= A[r];
        A[r] ^= A[l];
        A[l] ^= A[r];
        l ++;
        r --;
      }
    }
    sortIdx --;
  }
  return ans;
};

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Pancake Sorting.
// Memory Usage: 35.3 MB, less than 71.43% of JavaScript online submissions for Pancake Sorting.
