/**
* 897. Increasing Order Search Tree
* https://leetcode.com/problems/increasing-order-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let arr = [];
  function inorder(node) {
    if (node) {
      inorder(node.left);
      arr.push(node);
      inorder(node.right);
    }
  }
  inorder(root);
  for (let i = 0; i < arr.length; i ++) {
    arr[i].left = null;
    arr[i].right = arr[i + 1] ? arr[i + 1] : null;
  }
  return arr[0];
};

// Runtime: 156 ms, faster than 59.49% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 42.8 MB, less than 90.63% of JavaScript online submissions for Increasing Order Search Tree.
