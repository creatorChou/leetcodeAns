/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = [],
      l1num, l2num, sum, forward = false, l1Finish = false, l2Finish = false;

  while ((!l1Finish || !l2Finish) || forward) {
    l1num = l1.val;
    if (l1.next) {
      l1 = l1.next;
    } else {
      l1Finish = true;
      l1.val = 0;
    }
    l2num = l2.val;
    if (l2.next) {
      l2 = l2.next;
    } else {
      l2Finish = true;
      l2.val = 0;
    }
    sum = forward ? l1num + l2num + 1 : l1num + l2num;
    if (sum >= 10) {
      forward = true;
      sum = sum - 10;
    } else {
      forward = false;
    }
    result.push(sum);
  }
  return result;
};
