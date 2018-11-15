/**
* 552. Student Attendance Record II
* https://leetcode.com/problems/student-attendance-record-ii/
*/

/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  return helper(n, 0, {}, 0, 0);
};

function helper(n, now, map, absent, late) {
  let key = "" + now + "-" + absent + "-" + late;
  if (map[key]) return map[key];
  if (n === now) return 1;
  let sum = 0;
  sum += helper(n, now + 1, map, absent, 0);
  if (absent === 0) {
    sum += helper(n, now + 1, map, 1, 0);
  }
  if (late < 2) {
    sum += helper(n, now + 1, map, absent, late + 1);
  }
  if (sum > 1000000007) {
    sum %= 1000000007;
  }
  map[key] = sum;
  return sum;
}

function checkRecord2(n) {
  let map = {};
  for (let i = 0; i < n; i ++) {

  }
}
