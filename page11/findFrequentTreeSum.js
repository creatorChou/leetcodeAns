/**
* 508. Most Frequent Subtree Sum
* https://leetcode.com/problems/most-frequent-subtree-sum/
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let map = {};
  function postOrder (node) {
    if (!node) return 0;
    let sum = node.val;
    sum += postOrder(node.left);
    sum += postOrder(node.right);
    if (map[sum]) {
      map[sum] ++;
    } else {
      map[sum] = 1;
    }
    return sum;
  }
  postOrder(root);
  let result = [];
  let level = 0;
  for (let i in map) {
    if (map[i] > level) {
      level = map[i];
      result = [i];
    } else if (map[i] === level) {
      result.push(i);
    }
  }
  return result;
};

