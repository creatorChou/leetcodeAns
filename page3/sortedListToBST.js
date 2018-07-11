/**
* 109. Convert Sorted List to Binary Search Tree
* https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
*/

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let nums = [];
  let node = head;
  while (node) {
    nums.push(node.val);
    node = node.next;w
  }
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
