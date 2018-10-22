/**
* Non-overlapping Intervals
* https://leetcode.com/problems/non-overlapping-intervals/
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let overlapping = [];
  let len = intervals.length;
  for (let i = 0; i < len; i ++) {

  }
  for (let i = 0; i < len - 1; i ++) {
    for (let j = i + 1; j < len; j ++) {
      if (!(intervals[i].end <= intervals[j].start || intervals[j].end <= intervals[i].start)) {

      }
    }
  }
  let count = 0;
  for (let i = 0; i < overlapping.length; i ++) {

  }
  return count;
};

