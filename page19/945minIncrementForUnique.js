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
  let bucket = [];
  for (let num of A) {
    if (!bucket[num]) bucket[num] = 0;
    bucket[num] ++;
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < bucket.length; i ++) {
    count += sum;
    if (bucket[i] > 1) {
      sum += bucket[i] - 1;
    } else if (bucket[i] == null) {
      if (sum > 0) {
        sum --;
      }
    }
  }
  return count + (sum + 1) * sum / 2;
};


console.log(minIncrementForUnique([2,2,2,1]))

// Runtime: 112 ms, faster than 98.29% of JavaScript online submissions for Minimum Increment to Make Array Unique.
// Memory Usage: 43.5 MB, less than 20.00% of JavaScript online submissions for Minimum Increment to Make Array Unique.

