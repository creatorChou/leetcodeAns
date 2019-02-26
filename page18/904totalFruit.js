/**
* 904. Fruit Into Baskets
* https://leetcode.com/problems/fruit-into-baskets/
*/

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  let max = 0;
  let start = 0;
  let num1 = tree[start];
  let num2 = null;
  for (let i = 1; i < tree.length; i ++) {
    if (tree[i] === num1) continue;
    if (num2 === null) num2 = tree[i];
    if (tree[i] === num2) continue;
    max = Math.max(i - start, max);
    let j = i - 2;
    while (tree[j] === tree[i - 1]) j--;
    start = j + 1;
    num1 = tree[start];
    num2 = tree[i];
  }
  if (num2 === null) return tree.length;
  max = Math.max(tree.length - start, max);
  return max;
};

// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Fruit Into Baskets.
// Memory Usage: 41.8 MB, less than 94.92% of JavaScript online submissions for Fruit Into Baskets.
