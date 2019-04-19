/**
* 933. Number of Recent Calls
* https://leetcode.com/problems/number-of-recent-calls/
*/


var RecentCounter = function() {
  this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  while (this.queue.length > 0 && this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  this.queue.push(t);
  return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// Runtime: 276 ms, faster than 97.81% of JavaScript online submissions for Number of Recent Calls.
// Memory Usage: 57 MB, less than 47.06% of JavaScript online submissions for Number of Recent Calls.
