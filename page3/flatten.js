/**
* 114. Flatten Binary Tree to Linked List
* https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
*/

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return root;
  let nodes = [];
  function preorder (node) {
    if (node) {
      nodes.push(node);
      preorder(node.left);
      preorder(node.right);
    }
  }
  preorder(root);
  for (let i = 0; i < nodes.length - 1; i ++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  nodes[nodes.length - 1].left = null;
  return nodes[0];
};
