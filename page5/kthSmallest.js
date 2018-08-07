/**
* 230. Kth Smallest Element in a BST
* https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let res = null, count = 0;
  function inorder (root) {
    if (root) {
      inorder(root.left);
      count ++;
      if (count >= k) {
        if (count === k) {
          res = root.val;
        }
        return;
      }
      inorder(root.right);
    }
  }
  inorder(root);
  return res;
};
