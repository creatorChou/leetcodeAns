/**
* 82. Remove Duplicates from Sorted List II
* https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  } 
  let node = head;
  let duplicateVals = [];
  while (node.next) {
    if (node.val === node.next.val) {
      if (!duplicateVals.includes(node.val)) {
        duplicateVals.push(node.val);
      }
    }
    node = node.next;
  }
  node = head;
  let prev;
  while (node) {
    if (duplicateVals.includes(node.val)) {
      if (prev) {
        prev.next = node.next;
      } else {
        head = node.next
      }
    } else {
      prev = node;
    }
    node = node.next;
  }
  return head;
};

