/**
* 438. Find All Anagrams in a String
* https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) return [];
  let ret = [];
  let map = {};
  for (let i = 0; i < p.length; i ++) {
    if (!map[p[i]]) {
      map[p[i]] = 1;
    } else {
      map[p[i]] ++;
    }
  }
  for (let i = 0; i <= s.length - p.length; i ++) {
    if (map[s[i]] == null) continue;
    let valMap = {};
    let needCompare = true;
    for (let j = i; j < i + p.length; j ++) {
      if (map[s[j]] == null) {
        i = j;
        needCompare = false;
        break;
      }
      if (!valMap[s[j]]) {
        valMap[s[j]] = 1;
      } else {
        valMap[s[j]] ++;
      }
    }
    if (needCompare && isSameMap(map, valMap)) {
      ret.push(i);
    }
  }
  return ret;
};

function isSameMap (map1, map2) {
  for (let i in map1) {
    if (map1[i] !== map2[i]) {
      return false;
    }
  }
  return true;
}

// 6536 ms
