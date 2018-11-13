/**
* 539. Minimum Time Difference
* https://leetcode.com/problems/minimum-time-difference/
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  timePoints.sort();
  let min = Number.MAX_VALUE;
  for (let i = 1; i < timePoints.length; i ++) {
    let prev = timePoints[i-1].split(":");
    let now = timePoints[i].split(":");
    let preMin = parseInt(prev[1]);
    let nowMin = parseInt(now[1]);
    let preHour = parseInt(prev[0]);
    let nowHour = parseInt(now[0]);
    if (preMin > nowMin) {
      nowMin += 60;
      nowHour --;
    }
    let minDiff = nowMin - preMin + (nowHour - preHour) * 60;
    min = Math.min(min, minDiff);
  }
  let first = timePoints[0].split(":");
  let last = timePoints[timePoints.length - 1].split(":");
  let minDiff = (23 - parseInt(last[0]) + parseInt(first[0])) * 60 + parseInt(first[1]) + 60 - parseInt(last[1]);
  min = Math.min(min, minDiff);
  return min;
};
