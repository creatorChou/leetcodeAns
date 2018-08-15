/**
* 297. Serialize and Deserialize Binary Tree
* https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let preorder = "",
      inorder = "";
  function traversal (node) {
    if (node) {
      preorder += node.val;
      traversal(node.left);
      inorder += node.val;
      traversal(node.right);
    }
  }
  traversal(root);
  return preorder + "&" + inorder;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === "&") return null;
  data = data.split("&");
  let preArr = data[0].split("");
  let inArr = data[1].split("");
  let preMark = 1, inMark = 1;
  let newPre = [], newIn = [];
  for (let i = 0; i < preArr.length; i ++) {
    if (preArr[i] === "-") {
      preMark = -1;
    } else {
      newPre.push(preMark * preArr[i]);
      preMark = 1;
    }
    if (inArr[i] === "-") {
      inMark = -1;
    } else {
      newIn.push(inMark * inArr[i]);
      inMark = 1;
    }
  }
  function genTree (preorder, inorder) {
    if (!preorder) return null;
    let node = new TreeNode(parseInt(preorder[0]));
    if (preorder.length <= 3) {
      node.left = preorder[1] ? new TreeNode(parseInt(preorder[1])) : null;
      node.right = preorder[2] ? new TreeNode(parseInt(preorder[2])) : null;
      return node;
    }
    let inRootIndex = inorder.indexOf(preorder[0]),
        leftIn = inorder.slice(0, inRootIndex),
        rightIn = inorder.slice(inRootIndex + 1),
        leftPre = preorder.slice(1, 1 + leftIn.length),
        rightPre = preorder.slice(1 + leftIn.length);
    node.left = genTree(leftPre, leftIn);
    node.right = genTree(rightPre, rightIn);
    return node;
  }
  
  return genTree(newPre, newIn);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
