/**
* 937. Reorder Log Files
* https://leetcode.com/problems/reorder-log-files/
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let reg1 = /\s[0-9]/;
  let reg2 = /^\w+\s/;
  let alpha = [];
  let numeric = [];
  for (let log of logs) {
    if (reg1.test(log)) {
      numeric.push(log);
    } else {
      alpha.push(log);
    }
  }
  return alpha.sort((a, b) => {
    let aNew = a.replace(reg2, "");
    let bNew = b.replace(reg2, "");
    if (aNew < bNew) {
      return -1;
    } else if (aNew > bNew) {
      return 1;
    } else {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }
  }).concat(numeric);
};

// Runtime: 76 ms, faster than 57.65% of JavaScript online submissions for Reorder Log Files.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Reorder Log Files.
