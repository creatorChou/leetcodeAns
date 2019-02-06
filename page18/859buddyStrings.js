/**
* 859. Buddy Strings
* http://gap.fxsp.com/sp-web/develop/app.html#apps
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length < 2 || B.length < 2 || A.length !== B.length) return false;
  let a = null, b = null;
  let swaped = false;
  let map = {};
  let duplicated = false;
  for (let i = 0; i < A.length; i ++) {
    if (A[i] !== B[i]) {
      if (!swaped) {
        if (a === null) {
          a = A[i];
          b = B[i];
        } else {
          if (b === A[i] && a === B[i]) {
            swaped = true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      if (!duplicated) {
        if(map[A[i]]) {
          duplicated = true;
        } else {
          map[A[i]] = true;
        }
      }
    }
  }
  return swaped || duplicated;
};

// Runtime: 84 ms, faster than 61.11% of JavaScript online submissions for Buddy Strings.
