/**
* Add Two Numbers II
* https://leetcode.com/problems/add-two-numbers-ii/
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let n1 = "",  n2 = "";
  while (l1) {
    n1 += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    n2 += l2.val;
    l2 = l2.next;
  }
  if (n1 === "") n1 = "0";
  if (n2 === "") n2 = "0";
  let sum = addNum(n1, n2);
  let head = new ListNode(parseInt(sum[0]));
  let node = head;
  for (let i = 1; i < sum.length; i ++) {
    node.next = new ListNode(parseInt(sum[i]));
    node = node.next;
  }
  return head;
};

function addNum (num1, num2) {
  let result = "",
      rest = 0,
      bigNum,
      smallNum;
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
    let digit1 = num1[i] ? parseInt(num1[i]) : 0;
    let digit2 = num2[j] ? parseInt(num2[j]) : 0;
    let sum = digit1 + digit2 + rest;
    if (sum >= 10) {
      rest = 1;
      sum -= 10;
    } else {
      rest = 0;
    }
    result = sum + result;
  }
  if (rest !== 0) result = 1 + result;
  return result;
}


var addTwoNumbers2 = function(l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let rest = 0,
      head = null;
  while (stack1.length > 0 || stack2.length > 0) {
    let digit1 = stack1.length > 0 ? stack1.pop() : 0;
    let digit2 = stack2.length > 0 ? stack2.pop() : 0;
    let sum = digit1 + digit2 + rest;
    if (sum >= 10) {
      rest = 1;
      sum -= 10;
    } else {
      rest = 0;
    }
    let node = new ListNode(sum);
    node.next = head;
    head = node;
  }
  if (rest !== 0) {
    let node = new ListNode(rest);
    node.next = head;
    head = node;
  }
  return head;
}

// Runtime: 112 ms, faster than 99.30% of JavaScript online submissions for Add Two Numbers II.
