/**
* 945. Minimum Increment to Make Array Unique
* https://leetcode.com/problems/minimum-increment-to-make-array-unique/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let bucket = new Array(40000).fill(0);
  for (let num of A) {
    bucket[num] ++;
  }
  let count = 0;
  let r = 1;  
  for (let i = 0; i < bucket.length; i ++) {
    if (r <= i) r = i + 1;
    while (bucket[i] > 1) {
      if (bucket[r] === 0) {
        bucket[i] --;
        bucket[r] = 1;
        count += r - i;
      }
      r ++;
    }
  }
  return count;
};

// Time Limit Exceeded
// 54 / 59 test cases passed.


/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let map = {};
  for (let num of A) {
    if (map[num]) {
      map[num] ++;
    } else {
      map[num] = 1;
    }
  }
  let count = 0;
  let accumulation = [];
  for (let i = 0; i < 40000; i ++) {
    count += accumulation.length;
    if (map[i] > 1) {
      accumulation.push(map[i] - 1);
    } else if (map[i] == null) {
      if (accumulation.length > 0) {
        accumulation[0] --;
        if (accumulation[0] === 0) {
          accumulation.shift();
        }
      }
    }
  }
  return count;
};

