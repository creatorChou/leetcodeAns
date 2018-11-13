/**
* 551. Student Attendance Record I
* https://leetcode.com/problems/student-attendance-record-i/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let absent = 0;
  let late = 0;
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "L") {
      late ++;
    } else {
      late = 0;
      if (s[i] === "A") {
        absent ++;
      }
    }
    if (absent > 1 || late > 2) return false;
  }
  return true;
};

// Runtime: 52 ms, faster than 99.17% of JavaScript online submissions for Student Attendance Record I.
