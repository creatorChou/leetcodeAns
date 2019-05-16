/**
* 1006. Clumsy Factorial
* https://leetcode.com/problems/clumsy-factorial/
*/


/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  let sum = 0;
  let cur = N;
  N --;
  let curMark = "*";
  while (N > 0) {
    switch(curMark) {
      case "*":
        cur *= N;
        curMark = "/";
        break;
      case "/":
        cur = Math.trunc(cur / N);
        curMark = "+";
        break;
      case "+":
        cur += N;
        curMark = "-";
        break;
      case "-":
        sum += cur;
        cur = - N;
        curMark = "*";
        break;
    }
    N --;
  }
  sum += cur;
  return sum;
};

// Runtime: 60 ms, faster than 87.33% of JavaScript online submissions for Clumsy Factorial.
// Memory Usage: 34.3 MB, less than 66.67% of JavaScript online submissions for Clumsy Factorial.
