/**
* 434. Number of Segments in a String
* https://leetcode.com/problems/number-of-segments-in-a-string/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(" "),
      count = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] !== "") {
      count ++;
    }
  }
  return count;
};

var countSegments2 = function(s) {
  let flg = true,
      count = 0;
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === " ") {
      flg = true;
    } else {
      if (flg) {
        count ++;
      }
      flg = false;
    }
  }
  return count;
};

