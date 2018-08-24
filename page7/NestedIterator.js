/**
* 341. Flatten Nested List Iterator
* https://leetcode.com/problems/flatten-nested-list-iterator/description/
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedIterator {

  constructor (nestedList) {
    this.indexStack = [0];
    this.arrStack = [nestedList];
    this.flatten();
  }

  flatten () {
    let index = this.indexStack[this.indexStack.length - 1],
        target = this.arrStack[this.arrStack.length - 1];
    if (index >= target.length) {
      this.indexStack.pop();
      this.arrStack.pop();
      if (this.indexStack.length > 0) {
        this.indexStack[this.indexStack.length - 1] ++;
        this.flatten();
      }
    } else {
      if (!target[index].isInteger()) {
        this.arrStack.push(target[index].getList());
        this.indexStack.push(0);
        this.flatten();
      }
    }
  }

  hasNext () {
    return this.arrStack.length > 0;
  }

  next () {
    let index = this.indexStack[this.indexStack.length - 1],
        target = this.arrStack[this.arrStack.length - 1],
        result = target[index].getInteger();
    this.indexStack[this.indexStack.length - 1] ++;
    this.flatten();
    return result;
  }

}
