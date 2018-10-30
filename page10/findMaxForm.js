/**
* Ones and Zeroes
* https://leetcode.com/problems/ones-and-zeroes/
*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let trans = [];
  for (let i = 0; i < strs.length; i ++) {
    let count = 0;
    for (let j = 0; j < strs[i].length; j ++) {
      if (strs[i][j] === "0") count ++;
    }
    trans[i] = [count, strs[i].length - count];
  }
  
  return helper(strs, m, n, 0);
};

function helper(strs, m, n, i) {
  
  for (; i < strs.length; i ++) {

  }
}
