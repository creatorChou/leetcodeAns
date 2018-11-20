/**
* 567. Permutation in String
* https://leetcode.com/problems/permutation-in-string/
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length === 0) return true;
  if (s1.length > s2.length) return false;
  let charMap1 = {};
  let charMap2 = {};
  for (let c of s1) {
    if (charMap1[c]) {
      charMap1[c] ++;
    } else {
      charMap1[c] = 1;
      charMap2[c] = 0;
    }
  }
  for (let i = 0; i < s1.length; i ++) {
    if (charMap2[s2[i]]) {
      charMap2[s2[i]] ++;
    } else {
      charMap2[s2[i]] = 1;
    }
  }
  let allMatch = true;
  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      allMatch = false;
      break;
    }
  }
  if (allMatch) {
    return true;
  }
  for (let i = 0, j = s1.length; j < s2.length; i ++, j ++) {
    let outChar = s2[i];
    let inChar = s2[j];
    if (charMap2[outChar] != null) charMap2[outChar] --;
    if (charMap1[inChar] == null) continue;
    charMap2[inChar] ++;
    let allMatch = true;
    for (let key in charMap1) {
      if (charMap1[key] !== charMap2[key]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) {
      return true;
    }
  }
  return false;
};
