/**
* 111. Minimum Depth of Binary Tree
* https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let nodes = [root],
      size, i, node,
      depth = 1;

  while (nodes.length > 0) {
    size = nodes.length;
    for (i = 0; i < size; i ++) {
      node = nodes.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        nodes.push(node.left);
      }
      if (node.right) {
        nodes.push(node.right);
      }
    }
    depth ++;
  }
  return depth;
};
