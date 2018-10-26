/**
* Serialize and Deserialize BST
* https://leetcode.com/problems/serialize-and-deserialize-bst/
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
  let arr = [];
  function inorder(root, arr) {
    if (root) {
      inorder(root.left, arr);
      arr.push(root.val);
      if (root.right) {
        arr.push("s");
        inorder(root.right, arr);
        arr.push("e");
      }
    }
  }
  inorder(root, arr);
  return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(",");
  let stack = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i ++) {
    switch (arr[i]) {
      case "s":
        idx ++;
        break;
      case "e":
        stack[idx - 1].right = stack[idx];
        stack.pop();
        idx --;
        break;
      default:
        let node = new TreeNode(parseInt(arr[i]));
        if (stack[idx]) {
          node.left = stack[idx];
          stack[idx] = node;
        } else {
          stack[idx] = node;
        }
        break;
    }
  }
  return stack[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Runtime: 88 ms, faster than 75.00% of JavaScript online submissions for Serialize and Deserialize BST.
