/**
* 337. House Robber III
* https://leetcode.com/problems/house-robber-iii/description/
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
 * @return {number}
 */
var rob = function(root, pick = true) {
  if (root) {
    if (pick) {
      return Math.max(rob(root.left, false) + root.val + rob(root.right, false), rob(root.left, true) + rob(root.right, true));
    } else {
      return rob(root.left, true) + rob(root.right, true);
    }
  } else {
    return 0;
  }
};

// 2704 ms

var rob2 = function(root) {
  if (!root) return 0;

}
