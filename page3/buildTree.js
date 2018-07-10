/**
* 105. Construct Binary Tree from Preorder and Inorder Traversal
* https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
*/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let rootVal = preorder[0],
      index = inorder.indexOf(rootVal);
  if (index !== -1) {
      let root = new TreeNode(rootVal),
          leftArr = inorder.slice(0, index),
          rightArr = inorder.slice(index + 1);
    preorder.shift();
    if (preorder.length > 0) {
      root.left = buildTree(preorder, leftArr);
      root.right = buildTree(preorder, rightArr);
    }
    return root;
  } else {
    return null;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]));
