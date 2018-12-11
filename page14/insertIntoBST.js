/**
* 701. Insert into a Binary Search Tree
* https://leetcode.com/problems/insert-into-a-binary-search-tree/
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let node = root;
  while (node) {
    if (node.val > val) {
      if (node.left) {
        node = node.left;
      } else {
        node.left = new TreeNode(val);
        break;
      }
    } else if (node.val < val) {
      if (node.right) {
        node = node.right;
      } else {
        node.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};

var insertIntoBST = function(root, val) {
  if (root.val > val) {
    if (root.left) {
      insertIntoBST(root.left, val);
    } else {
      root.left = new TreeNode(val);
    }
  } else if (root.val < val) {
    if (root.right) {
      insertIntoBST(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  }
  return root;
};


