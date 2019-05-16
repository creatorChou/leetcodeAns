/**
* 1007. Minimum Domino Rotations For Equal Row
* https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  let mapA = {}, mapB = {}, n = A.length;
  for (let i = 0; i < n; i ++) {
    if (!mapA[A[i]]) mapA[A[i]] = [];
    mapA[A[i]].push(i);
  }
  for (let i = 0; i < n; i ++) {
    if (!mapB[B[i]]) mapB[B[i]] = [];
    mapB[B[i]].push(i);
  }
  let minChange = Number.MAX_VALUE;
  for (let num of [1,2,3,4,5,6]) {
    if (mapA[num] && mapA[num].length === n || mapB[num] && mapB[num].length === n) return 0;
    if (mapA[num] && mapB[num] && mapA[num].length + mapB[num].length >= n) {
      let set = new Set();
      for (let val of mapA[num]) {
        set.add(val);
      }
      for (let val of mapB[num]) {
        set.add(val);
      }
      if (set.size === n) {
        minChange = Math.min(minChange, n - Math.max(mapA[num].length, mapB[num].length));
      }
    }
  }
  return minChange <= n ? minChange : -1;
};

// Runtime: 144 ms, faster than 6.32% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 58.3 MB, less than 5.55% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.

function minDominoRotations(A, B) {
  let n1 = getCount(A, B, A[0]);
  let n2 = getCount(A, B, B[0]);
  if (n1 === -1 && n2 === -1) {
    return -1;
  } else if (n1 === -1) {
    return n2;
  } else if (n2 === -1) {
    return n1;
  } else {
    return Math.min(n1, n2);
  }
}

function getCount(A, B, num) {
  let n = A.length;
  let numCountA = 0, numCountB = 0;
  for (let i = 0; i < n; i ++) {
    let pass = false;
    if (A[i] === num) {
      numCountA ++;
      pass = true;
    }
    if (B[i] === num) {
      numCountB ++;
      pass = true;
    }
    if (!pass) return -1;
  }
  return n - Math.max(numCountA, numCountB);
}

// Runtime: 100 ms, faster than 34.21% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 41.4 MB, less than 50.55% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.

