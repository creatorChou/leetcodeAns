/**
* 147. Insertion Sort List
* https://leetcode.com/problems/insertion-sort-list/description/
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head) return head;
  let insertNode = head.next,
      newHead = head,
      temp,
      compare,
      comparePrev;
  newHead.next = null;
  while (insertNode) {
    temp = insertNode;
    insertNode = insertNode.next;
    comparePrev = null;
    compare = newHead;
    while (compare && compare.val < temp.val) {
      comparePrev = compare;
      compare = compare.next;
    }
    temp.next = compare;
    if (comparePrev) {
      comparePrev.next = temp;
    } else {
      newHead = temp;
    }
  }
  return newHead;
};
