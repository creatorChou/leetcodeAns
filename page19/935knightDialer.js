/**
* 935. Knight Dialer
* https://leetcode.com/problems/knight-dialer/
*/

/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
  let points = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
  let arr = new Array(10).fill(1);
  let mod = 10 ** 9 + 7;
  for (let i = 1; i < N; i ++) {
    let newArr = new Array(10).fill(0);
    for (let j = 0; j <= 9; j ++) {
      let count = arr[j];
      let pointsArr = points[j];
      for (let k = 0; k < pointsArr.length; k ++) {
        newArr[pointsArr[k]] += count;
      }
    }
    for (let j = 0; j <= 9; j ++) {
      newArr[j] %= mod;
    }
    arr = newArr;
  }
  let count = 0;
  for (let j = 0; j <= 9; j ++) {
    count += arr[j];
  }
  return count % mod;
};


// Runtime: 128 ms, faster than 86.57% of JavaScript online submissions for Knight Dialer.
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Knight Dialer.
