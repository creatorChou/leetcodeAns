/**
* 667. Beautiful Arrangement II
* https://leetcode.com/problems/beautiful-arrangement-ii/
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  let prev = 1, back = n;
  let isPrev = true;
  let arr = [];
  while (k > 0) {
    if (isPrev) {
      arr.push(prev);
      prev ++;
    } else {
      arr.push(back);
      back --;
    }
    k --;
    isPrev = !isPrev;
  }
  if (isPrev) {
    while (arr.length < n) {
      arr.push(back);
      back --;
    }
  } else {
    while (arr.length < n) {
      arr.push(prev);
      prev ++;
    }
  }
  return arr;
};

console.log(constructArray(5, 2));

// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Beautiful Arrangement II.
