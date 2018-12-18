/**
* 729. My Calendar I
* https://leetcode.com/problems/my-calendar-i/
*/


var MyCalendar = function() {
  this.calendar = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  let i = 0;
  if (this.calendar.length > 0) {
    if (end <= this.calendar[0][0]) {
      this.calendar.unshift([start, end]);
      return true;
    } else if (start >= this.calendar[this.calendar.length - 1][1]) {
      this.calendar.push([start, end]);
      return true;
    } else {
      for (let i = 1; i < this.calendar.length && this.calendar[i-1][1] <= start; i ++) {
        if (this.calendar[i][0] >= end) {
          this.calendar.splice(i, 0, [start, end]);
          return true;
        }
      }
      return false;
    }
  } else {
    this.calendar[0] = [start, end];
    return true;
  }
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */

// Runtime: 180 ms, faster than 62.22% of JavaScript online submissions for My Calendar I.
