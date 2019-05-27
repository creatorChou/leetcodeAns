/**
* 1028. Recover a Tree From Preorder Traversal
* https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  let stack = [], lv = 0, s = "", node;
  for (let i = 0; i < S.length; i ++) {
    if (S[i] === "-") {
      if (S[i-1] === "-") {
        lv ++;
      } else {
        node = new TreeNode(parseInt(s));
        s = "";
        if (lv < stack.length) {
          backToLength(stack, lv);
        }
        stack.push(node);
        lv = 1;
      }
    } else {
      s += S[i];
    }
  }
  node = new TreeNode(parseInt(s));
  if (lv < stack.length) {
    backToLength(stack, lv);
  }
  stack.push(node);
  backToLength(stack, 1);
  return stack[0];
};

function backToLength(stack, len) {
  while (stack.length > len) {
    let tail = stack.pop();
    let peek = stack[stack.length - 1];
    if (!peek.left) {
      peek.left = tail;
    } else {
      peek.right = tail;
    }
  }
}

// Runtime: 80 ms, faster than 91.36% of JavaScript online submissions for Recover a Tree From Preorder Traversal.
// Memory Usage: 38 MB, less than 87.22% of JavaScript online submissions for Recover a Tree From Preorder Traversal.
