/**
* 636. Exclusive Time of Functions
* https://leetcode.com/problems/exclusive-time-of-functions/
*/

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  let res = new Array(n).fill(0);
  let s = [];
  let prev;
  for (let log of logs) {
    let data = log.split(":");
    let id = data[0];
    let timeStamp = parseInt(data[2]);
    if (data[1] === "start") {
      if (s.length > 0) {
        res[s[s.length - 1]] += timeStamp - prev;
      }
      prev = timeStamp;
      s.push(id);
    } else {
      res[s.pop()] += timeStamp - prev + 1;
      prev = timeStamp + 1;
    }
  }
  return res;
};

console.log(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]));

// Runtime: 84 ms, faster than 80.25% of JavaScript online submissions for Exclusive Time of Functions.
// Memory Usage: 39.7 MB, less than 73.91% of JavaScript online submissions for Exclusive Time of Functions.