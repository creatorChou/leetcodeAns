/**
* 1008. Construct Binary Search Tree from Preorder Traversal
* https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
*/

 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  return genTree(preorder, 0, preorder.length - 1);
};

function genTree(preorder, start, end) {
  if (start > end) return null;
  let root = new TreeNode(preorder[start]);
  let breakPoint = end + 1;
  for (var i = start + 1; i <= end; i ++) {
    if (preorder[i] > preorder[start]) {
      breakPoint = i;
      break;
    }
  }
  root.left = genTree(preorder, start + 1, breakPoint - 1);
  root.right = genTree(preorder, breakPoint, end);
  return root;
}

// Runtime: 56 ms, faster than 98.68% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
// Memory Usage: 34.6 MB, less than 48.27% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.

