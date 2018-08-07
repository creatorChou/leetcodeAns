/**
*	257. Binary Tree Paths
*	https://leetcode.com/problems/binary-tree-paths/description/
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
	let result = [];
	function getPath (node, str) {
		if (node.left || node.right) {
			if (node.left) {
				getPath(node.left, str + node.val + "->");
			}
			if (node.right) {
				getPath(node.right, str + node.val + "->");
			}
		} else {
			result.push(str + node.val)
		}
	}
	getPath(root, "");
	return result;
};
