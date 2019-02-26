/**
* 895. Maximum Frequency Stack
* https://leetcode.com/problems/maximum-frequency-stack/
*/


var FreqStack = function() {
  this.map = {};
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.map[x] == null) {
    this.map[x] = [this.stack.length - 1];
  } else {
    this.map[x].push(this.stack.length - 1);
  }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let targetArr = [];
  for (let x in this.map) {
    if (this.map[x].length > targetArr.length) {
      targetArr = this.map[x];
    } else if (this.map[x].length === targetArr.length) {
      if (this.map[x][targetArr.length - 1] > targetArr[targetArr.length - 1]) {
        targetArr = this.map[x];
      }
    }
  }
  return this.stack[targetArr.pop()];
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
