/**
* Merge k Sorted Lists
* https://leetcode.com/problems/merge-k-sorted-lists/description/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let node = null;
  let nullIndex = lists.indexOf(null);
  let minIndex = 0;
  if (nullIndex !== -1) {
    lists.splice(nullIndex);
  }
  for (let i = 1; i < lists.length; i ++) {
    if (lists[i].val < lists[minIndex].val) {
      minIndex = i;
    }
  }

  if (lists.length > 0) {
    node = {
      val: lists[minIndex].val,
      next: mergeKLists(lists)
    }
    lists[minIndex] = lists[minIndex].next;
  }

  return node;
};

