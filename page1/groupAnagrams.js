/*
* Group Anagrams
* https://leetcode.com/problems/group-anagrams/description/
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = [];
  let str, i, j, isContain, allMatch, compareChars, matchIndex;
  while (strs.length > 0) {
    str = strs.pop();
    isContain = false;
    for (i = 0; i < result.length; i ++) {
      compareChars = result[i][0].split("");
      if (compareChars.length === str.length) {
        allMatch = true;
        for (j = 0; j < str.length; j ++) {
          matchIndex = compareChars.indexOf(str[j]);
          if (matchIndex === -1) {
            allMatch = false;
            break;
          } else {
            compareChars.splice(matchIndex, 1);
          }
        }
        if (allMatch) {
          result[i].push(str);
          isContain = true;
          break;
        }
      }
    }
    if (!isContain) {
      result.push([str]);
    }
  }
  return result;
};

console.log(groupAnagrams(["paw","dad","bog","day","day","mig","len","rat"]));
