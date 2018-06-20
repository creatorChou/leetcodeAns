/**
* Merge Intervals
* https://leetcode.com/problems/merge-intervals/description/
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
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let i, j, temp;
  for (i = 0; i < intervals.length; i ++) {
    for (j = intervals.length - 1; j >= i + 1; j --) {
      if (intervals[j].start < intervals[j - 1].start) {
        temp = intervals[j];
        intervals[j] = intervals[j - 1];
        intervals[j - 1] = temp;
      }
    }
  }

  let start, 
      end,
      startVal,
      endVal,
      result = [];
  for (i = 0; i < intervals.length; i ++) {
    start = intervals[i].start;
    end = intervals[i].end;
    if (typeof startVal === "undefined") {
      startVal = start;
    }
    if (typeof endVal === "undefined") {
      endVal = end;
    }
    if (start > endVal) {
      result.push([startVal, endVal]);
      startVal = start;
      endVal = end;
    } else {
      startVal = Math.min(startVal, start);
      endVal = Math.max(endVal, end);
    }
  }
  result.push([startVal, endVal]);
  return result;
};

var merge2 = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  let i, j, temp;
  intervals.sort((a, b) => a.start - b.start);

  let start, 
      end,
      startVal = intervals[0].start,
      endVal = intervals[0].end,
      result = [];
  for (i = 1; i < intervals.length; i ++) {
    start = intervals[i].start;
    end = intervals[i].end;
    if (start > endVal) {
      result.push([startVal, endVal]);
      startVal = start;
      endVal = end;
    } else {
      startVal = Math.min(startVal, start);
      endVal = Math.max(endVal, end);
    }
  }
  result.push([startVal, endVal]);
  return result;
};

