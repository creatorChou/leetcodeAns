/**
* 110. Balanced Binary Tree
* https://leetcode.com/problems/balanced-binary-tree/description/
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  let l = root.left,
      r = root.right,
      leftNodes = [],
      rightNodes = [],
      leftHeight = 0,
      rightHeight = 0,
      temp, i;

  if (l) {
    leftNodes.push(l);
    leftHeight ++;
  }
  if (r) {
    rightNodes.push(r);
    rightHeight ++;
  }
  while (leftNodes.length > 0) {
    temp = [];
    for (i = 0; i < leftNodes.length; i ++) {
      if (leftNodes[i].left) {
        temp.push(leftNodes[i].left);
      }
      if (leftNodes[i].right) {
        temp.push(leftNodes[i].right);
      }
    }
    leftNodes = temp;
    if (leftNodes.length > 0) {
      leftHeight ++;
    }
  }

  while (rightNodes.length > 0) {
    temp = [];
    for (i = 0; i < rightNodes.length; i ++) {
      if (rightNodes[i].left) {
        temp.push(rightNodes[i].left);
      }
      if (rightNodes[i].right) {
        temp.push(rightNodes[i].right);
      }
    }
    rightNodes = temp;
    if (rightNodes.length > 0) {
      rightHeight ++;
    }
  }

  if (Math.abs(rightHeight - leftHeight) > 1) {
    return false;
  } else {
    return isBalanced(l) && isBalanced(r);
  }

};
