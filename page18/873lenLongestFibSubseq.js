/**
* 873. Length of Longest Fibonacci Subsequence
* https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  let map = {};
  map[A[0] + A[1]] = [{prev: A[1], len: 2}];
  let max = 0;
  for (let i = 2; i < A.length; i ++) {
    if (map[A[i]]) {
      for (let obj of map[A[i]]) {
        let data = {
          prev: A[i],
          len: obj.len + 1
        }
        if (data.len > 2) {
          max = Math.max(max, data.len);
        }
        let next = obj.prev + A[i];
        if (!map[next]) {
          map[next] = [];
        }
        map[next].push(data);
      }
    }
    for (let j = 0; j < i; j ++) {
      let next = A[j] + A[i];
      let data = {
        prev: A[i],
        len: 2
      }
      if (!map[next]) {
        map[next] = [];
      }
      map[next].push(data);
    }
  }
  return max;
};

// Memory Limit Exceeded

function lenLongestFibSubseq (A) {
  let set = new Set(A);
  let max = 0;
  for (let i = 1; i < A.length; i ++) {
    for (let j = 0; j < i; j ++) {
      let len = 2;
      let a = A[j], b = A[i];
      let next = a + b;
      while (set.has(next)) {
        len ++;
        a = b;
        b = next;
        next = a + b;
      }
      if (len > 2) {
        max = Math.max(max, len);
      }
    }
  }
  return max;
}

// Runtime: 188 ms, faster than 73.68% of JavaScript online submissions for Length of Longest Fibonacci Subsequence.
// Memory Usage: 15.8 MB, less than 26.67% of JavaScript online submissions for Length of Longest Fibonacci Subsequence.
