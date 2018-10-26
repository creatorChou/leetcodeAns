/**
* Delete Node in a BST
* https://leetcode.com/problems/delete-node-in-a-bst/
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null;
  return preorder(root, null, null, key);
};

function preorder(node, prev, direction, key) {
  if (node) {
    if (node.val === key) {
      let leftNode = node.left;
      let rightNode = node.right;
      if (leftNode && rightNode) {
        node = rightNode;
        if (prev) {
          prev[direction] = node;
        }
        let tempNode = node;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        tempNode.left = leftNode;
      } else if (leftNode && !rightNode) {
        if (prev) {
          prev[direction] = leftNode;
        } else {
          node = leftNode;
        }
      } else if (!leftNode && rightNode) {
        if (prev) {
          prev[direction] = rightNode;
        } else {
          node = rightNode;
        }
      } else {
        node = null;
        if (prev) {
          prev[direction] = node;
        }
      }
    } else {
      preorder(node.left, node, "left", key);
      preorder(node.right, node, "right", key);
    }
  }
  return node;
}

// Runtime: 96 ms, faster than 63.79% of JavaScript online submissions for Delete Node in a BST.
