/**
* Sort Characters By Frequency
* https://leetcode.com/problems/sort-characters-by-frequency/
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]]) {
      map[s[i]] ++;
    } else {
      map[s[i]] = 1;
    }
  }
  let parts = [];
  for (let i in map) {
    let str = "";
    for (let j = 0; j < map[i]; j ++) {
      str += i;
    }
    parts.push(str);
  }
  return parts.sort((a, b) => b.length - a.length).join("");
};


var frequencySort2 = function(s) {
  let bucket = [];
  let map = {};
  for (let i = 0; i < s.length; i ++) {
    if (map[s[i]]) {
      map[s[i]] ++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i in map) {
    if (bucket[map[i]]) {
      bucket[map[i]].push(i);
    } else {
      bucket[map[i]] = [i];
    }
  }
  let result = "";
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (!bucket[i]) continue;
    for (let j = 0; j < bucket[i].length; j ++) {
      result += bucket[i][j].repeat(i);
    }
  }
  return result;
}
