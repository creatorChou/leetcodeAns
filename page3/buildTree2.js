/**
* 106. Construct Binary Tree from Inorder and Postorder Traversal
* https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length < 4) {
    let rootVal = postorder.pop();
    let root = null;
    if (typeof rootVal !== "undefined") {
      root = new TreeNode(rootVal);
    }
    let rightVal = postorder.pop();
    if (typeof rightVal !== "undefined") {
      root.right = new TreeNode(rightVal);
    }
    let leftVal = postorder.pop();
    if (typeof leftVal !== "undefined") {
      root.left = new TreeNode(leftVal);
    }
    return root;
  } else {
    let rootVal = postorder.pop(),
        root = new TreeNode(rootVal),
        index = inorder.indexOf(rootVal),
        inorderLeft = inorder.slice(0, index),
        inorderRight = inorder.slice(index + 1),
        postorderLeft, postorderRight;

    if (inorderLeft.length > 0) {
      let leftRootIndex = postorder.indexOf(inorderLeft[inorderLeft.length - 1]) + 1;
      postorderLeft = postorder.slice(0, leftRootIndex);
      postorderRight = postorder.slice(leftRootIndex);
      root.left = buildTree(inorderLeft, postorderLeft);
      root.right = buildTree(inorderRight, postorderRight);
    } else {
      root.left = null;
      root.right = (inorderRight, postorder);
    }
    return root;
  }
};

var buildTree2 = function(inorder, postorder) {
  if (postorder.length === 0) return null;
  let rootVal = postorder.pop();
  const root = new TreeNode(rootVal);
};
