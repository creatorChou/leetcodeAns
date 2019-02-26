/**
* 894. All Possible Full Binary Trees
* https://leetcode.com/problems/all-possible-full-binary-trees/
*/

/**
A full binary tree is a binary tree where each node has exactly 0 or 2 children.
Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
Each node of each tree in the answer must have node.val = 0.
You may return the final list of trees in any order.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N, map = {}) {
  if (map[N]) return map[N];
  if (N % 2 === 0) return [];
  let results = [];
  if (N > 1) {
    for (let i = 0; i < N; i ++) {
      let j = N - 1 - i;
      for (let l of allPossibleFBT(i)) {
        for (let r of allPossibleFBT(j)) {
          let node = new TreeNode(0);
          node.left = l;
          node.right = r;
          results.push(node);
        }
      }
    }
  } else {
    results.push(new TreeNode(0));
  }
  map[N] = results;
  return map[N];
};

// Runtime: 160 ms, faster than 44.86% of JavaScript online submissions for All Possible Full Binary Trees.
// Memory Usage: 52 MB, less than 41.67% of JavaScript online submissions for All Possible Full Binary Trees.
