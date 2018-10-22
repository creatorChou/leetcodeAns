/**
* 421.Maximum XOR of Two Numbers in an Array
* https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let head = new TreeNode(null);
  let binary = [];
  for (let i = 0; i < nums.length; i ++) {
    let node = head;
    let str = "";
    for (let j = 0; j < 31; j ++) {
      str = (nums[i] >> j & 1) + str;
    }
    binary[i] = str;
    for (let j = 0; j < 31; j ++) {
      if (str[j] === "0") {
        if (!node.left) {
          node.left = new TreeNode();
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new TreeNode();
        }
        node = node.right;
      }
    }
  }
  console.log(binary);
  let res = 0;
  for (let i = 0; i < binary.length; i ++) {
    let node = head;
    let sum = 0;
    for (let j = 0; j < 31; j ++) {
      if (binary[i][j] === "0") {
        if (node.right) {
          node = node.right;
          sum += Math.pow(2, 30 - j);
        } else {
          node = node.left;
        }
      } else {
        if (node.left) {
          node = node.left;
          sum += Math.pow(2, 30 - j);
        } else {
          node = node.right;
        }
      }
    }
    res = Math.max(res, sum);
  }
  return res;
};

class TreeNode {
  constructor () {
    this.left = null;
    this.right = null;
  }
}

// console.log(findMaximumXOR([10,25,2,8,0,33,49,34,888,21,9834,2313]));
console.log(findMaximumXOR([32,18,33,42,29,20,26,36,15,46]));
