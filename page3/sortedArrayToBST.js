/**
* 108. Convert Sorted Array to Binary Search Tree
* https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
*/

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return genNode(nums, 0, nums.length);
};

var genNode = function(nums, l, r) {
  if (r <= l) return null;
  let center = Math.floor((l + r)/2);
  let root = new TreeNode(nums[center]);
  root.left = genNode(nums, l, center);
  root.right = genNode(nums, center + 1, r);
  return root;
}
