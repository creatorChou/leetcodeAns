/**
* 86. Partition List
* https://leetcode.com/problems/partition-list/description/
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
 * @param {number} x
 * @return {ListNode}
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let node = head,
      target = null,
      prev = null,
      insertPrev, insertNode, insertCurr;

  while (node) {
    if (!target) {
      if (node.val >= x) {
        target = node;
        prev = node;
      }
      node = node.next;
    } else {
      if (node.val < x) {
        prev.next = node.next;
        insertNode = node;
        node = node.next;
        insertCurr = head;
        insertPrev = null;
        if (insertCurr.next) {
          while (insertCurr !== target) {
            if (insertCurr.val < insertNode.val) {
              insertPrev = insertCurr;
            } else {
              if (insertPrev) {
                insertPrev.next = insertNode;
                insertNode.next = insertCurr;
              } else {
                insertNode.next = insertCurr;
                head = insertNode;
              }
              break;
            }
            insertCurr = insertCurr.next;
          }
        } else {
          insertNode.next = insertCurr;
          head = insertNode;
        }
      } else {
        prev = node;
        node = node.next;
      }
    }
  }

  return head;
};
