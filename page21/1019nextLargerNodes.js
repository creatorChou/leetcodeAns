/**
* 1019. Next Greater Node In Linked List
* https://leetcode.com/problems/next-greater-node-in-linked-list/
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
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let node = head;
  let stack = [];
  let idxStack = [];
  let ans = [];
  let i = 0;
  while (node) {
    while (stack.length > 0 && node.val > stack[stack.length - 1]) {
      stack.pop();
      ans[idxStack.pop()] = node.val;
    }
    idxStack.push(i);
    stack.push(node.val);
    i ++;
    node = node.next;
  }
  for (let idx of idxStack) {
    ans[idx] = 0;
  }
  return ans;
};

// Runtime: 200 ms, faster than 61.09% of JavaScript online submissions for Next Greater Node In Linked List.
// Memory Usage: 47.9 MB, less than 24.88% of JavaScript online submissions for Next Greater Node In Linked List.
