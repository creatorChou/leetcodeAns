/**
* 141. Linked List Cycle
* https://leetcode.com/problems/linked-list-cycle/description/
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let node = head;
  while (node) {
    if (node.traversed) {
      return true;
    }
    node.traversed = true;
    node = node.next;
  }
  return false;
};
