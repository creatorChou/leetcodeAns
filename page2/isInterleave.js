/**
* 97. Interleaving String
* https://leetcode.com/problems/interleaving-string/description/
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let l1 = s1.length,
      l2 = s2.length,
      l3 = s3.length;
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let s1Index = 0,
      s2Index = 0;
  for (let i = 0; i < l3; i ++) {
    if (s1[s1Index] === s3[i] && s2[s2Index] !== s3[i]) {
      s1Index ++;
    } else if (s1[s1Index] !== s3[i] && s2[s2Index] === s3[i]) {
      s2Index ++;
    } else if (s1[s1Index] !== s3[i] && s2[s2Index] !== s3[i]) {
      return false;
    } else if (s1[s1Index] === s3[i] && s2[s2Index] === s3[i]) {
      if (!isInterleave(s1.slice(s1Index + 1), s2.slice(s2Index), s3.slice(i + 1)) 
        && !isInterleave(s1.slice(s1Index), s2.slice(s2Index + 1), s3.slice(i + 1))) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

console.log(isInterleave("", "", ""))

// time limit exceed
