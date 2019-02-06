/**
* 872. Leaf-Similar Trees
* https://leetcode.com/problems/leaf-similar-trees/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let arr1 = [], arr2 = [];
  function inorder(node, arr) {
    if (node) {
      inorder(node.left, arr);
      if (!node.left && !node.right) {
        arr.push(node.val);
      }
      inorder(node.right, arr);
    }
  }
  inorder(root1, arr1);
  inorder(root2, arr2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Runtime: 76 ms, faster than 29.08% of JavaScript online submissions for Leaf-Similar Trees.
// Memory Usage: 15.9 MB, less than 7.26% of JavaScript online submissions for Leaf-Similar Trees.
