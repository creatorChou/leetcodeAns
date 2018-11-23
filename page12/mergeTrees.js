/**
* 617. Merge Two Binary Trees
* https://leetcode.com/problems/merge-two-binary-trees/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  let sum = null;
  let n1Left = null;
  let n1Right = null;
  let n2Left = null;
  let n2Right = null;
  let node = null;
  if (t1) {
    n1Left = t1.left;
    n1Right = t1.right;
    sum += t1.val;
  }
  if (t2) {
    n2Left = t2.left;
    n2Right = t2.right;
    sum += t2.val;
  }
  if (t1 || t2) {
    node = new TreeNode(sum);
    node.left = mergeTrees(n1Left, n2Left);
    node.right = mergeTrees(n1Right, n2Right);
  }
  return node;
};
// pure

var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
// not pure