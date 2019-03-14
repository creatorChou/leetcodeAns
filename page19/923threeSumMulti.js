/**
* 923. 3Sum With Multiplicity
* https://leetcode.com/problems/3sum-with-multiplicity/
*/

/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {
  let map = {};
  let count = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i < A.length; i ++) {
    if (!map[A[i]]) {
      map[A[i]] = [];
    }
    map[A[i]].push(i);
  }
  for (let i = 0; i < A.length - 2; i ++) {
    let brake = true;
    for (let j = i + 1; j < A.length - 1; j ++) {
      let t = target - A[i] - A[j];
      if (t < 0) {
        brake = false;
        break;
      }
      let indices = map[t];
      if (!indices) continue;
      let idx = indices.length - 1;
      let c = 0;
      while (indices[idx] > j) {
        idx --;
        c ++;
      }
      count += c;
      count %= mod;
    }
    if (!brake) break;
  }
  return count;
};
