/**
* 173. Binary Search Tree Iterator
* https://leetcode.com/problems/binary-search-tree-iterator/description/
*/

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.arr = [];
  this.inorder(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.arr.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  return this.arr.shift();
};

BSTIterator.prototype.inorder = function(node) {
  if (node) {
    this.inorder(node.left);
    this.arr.push(node);
    this.inorder(node.right);
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
