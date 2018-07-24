/**
*	199. Binary Tree Right Side View
*	https://leetcode.com/problems/binary-tree-right-side-view/description/
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  let queue = [root],
  		res = [],
  		len, i, node;
  while (queue.length > 0) {
  	len = queue.length;
  	res.push(queue[len - 1].val);
  	for (i = 0; i < len; i ++) {
  		node = queue.shift();
  		if (node.left) {
  			queue.push(node.left);
  		}
  		if (node.right) {
  			queue.push(node.right);
  		}
  	}
  }
  return res;
};
