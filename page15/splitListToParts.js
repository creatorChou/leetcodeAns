/**
* 725. Split Linked List in Parts
* https://leetcode.com/problems/split-linked-list-in-parts/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let count = 0;
  let node = root;
  while (node) {
    count ++;
    node = node.next;
  }
  let nums = new Array(k).fill(Math.floor(count / k));
  count %= k;
  for (let i = 0; i < k, count > 0; i ++, count --) {
    nums[i] ++;
  }
  let result = [];
  node = root;
  for (let i = 0; i < k; i ++) {
    if (nums[i] > 0) {
      result[i] = node;
      let j = 0;
      while (j < nums[i] - 1) {
        node = node.next;
        j ++;
      }
      let temp = node.next;
      node.next = null;
      node = temp;
    } else {
      result[i] = null;
    }
  }
  return result;
};
