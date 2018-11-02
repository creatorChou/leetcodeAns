/**
* Number Complement
* https://leetcode.com/problems/number-complement/
*/

var findComplement = function(num) {
  let i = 0;
  while (Math.pow(2, i) <= num) {
    i ++;
  }
  let sum = 0;
  for (let j = 0; j < i; j ++) {
    if ((num >> j & 1) === 0) {
      sum += Math.pow(2, j);
    }
  }
  return sum;
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Number Complement.
