/**
* 98. Validate Binary Search Tree
* https://leetcode.com/problems/validate-binary-search-tree/description/
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let arr = [];
  inorder(root, arr);
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};

var inorder = function(root, arr) {
  if (root) {
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  }
}
