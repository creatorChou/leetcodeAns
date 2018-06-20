/**
* Insert Interval
* https://leetcode.com/problems/insert-interval/description/
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let start = newInterval.start,
      end = newInterval.end,
      result = [],
      hasInsert = false,
      temp;
  while (intervals.length > 0) {
    temp = intervals.shift();
    if (temp.end < start) {
      result.push(temp);
    } else if (temp.start > end) {
      result.push([start, end], temp);
      hasInsert = true;
      break;
    } else {
      start = Math.min(temp.start, start);
      end = Math.max(temp.end, end);
    }
  }
  if (hasInsert) {
    return result.concat(intervals);
  } else {
    result.push([start, end]);
    return result;
  }
};
