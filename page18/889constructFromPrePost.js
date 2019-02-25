/**
* 889. Construct Binary Tree from Preorder and Postorder Traversal
* https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
*/

// Return any binary tree that matches the given preorder and postorder traversals.

// Values in the traversals pre and post are distinct positive integers.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post, start = 0, end = pre.length - 1) {
  if (start > end) return null;
  let root = new TreeNode(pre[start]);
  if (start === end) return root;
  let postIdx = post.indexOf(pre[start]);
  let idx = pre.indexOf(post[postIdx - 1]);
  root.left = constructFromPrePost(pre, post, start + 1, idx - 1);
  root.right = constructFromPrePost(pre, post, idx, end);
  return root;
};

// Runtime: 76 ms, faster than 77.42% of JavaScript online submissions for Construct Binary Tree from Preorder and Postorder Traversal.
// Memory Usage: 35.6 MB, less than 92.86% of JavaScript online submissions for Construct Binary Tree from Preorder and Postorder Traversal.
