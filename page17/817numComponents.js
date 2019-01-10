/**
* 817. Linked List Components
* https://leetcode.com/problems/linked-list-components/
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  let set = new Set
  let node = head;
  let count = 0;
  let hasPrev = false;
  while (node) {
    if (G.indexOf(node.val) === -1) {
      hasPrev = false;
    } else {
      if (!hasPrev) {
        count ++;
      }
      hasPrev = true;
    }
    node = node.next;
  }
  return count;
};

// Runtime: 284 ms, faster than 16.90% of JavaScript online submissions for Linked List Components.

/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  let set = new Set(G);
  let node = head;
  let count = 0;
  let hasPrev = false;
  while (node) {
    if (!set.has(node.val)) {
      hasPrev = false;
    } else {
      if (!hasPrev) {
        count ++;
      }
      hasPrev = true;
    }
    node = node.next;
  }
  return count;
};

// Runtime: 76 ms, faster than 57.75% of JavaScript online submissions for Linked List Components.
