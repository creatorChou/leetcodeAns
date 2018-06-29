/**
* 95. Unique Binary Search Trees II
* https://leetcode.com/problems/unique-binary-search-trees-ii/description/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  let result = [];
  function tree(start, end, arr) {
    if (start >= end) {
      arr.push(null);
      result.push(arr.slice());
      arr.pop();
      return;
    }
    for (let i = start; i <= end; i ++) {
      arr.push(i);
      tree(start, i - 1, arr);
      tree(i + 1, end, arr);
      arr.pop();
    }
  }
  tree(1, n, []);
  return result;
};

console.log(generateTrees(3));
