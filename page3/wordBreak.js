/**
* 139. Word Break
* https://leetcode.com/problems/word-break/description/
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  return DFS(s, "", wordDict);
};

function DFS(s, str, wordDict) {
  if (str.length === s.length) {
    return s === str;
  }
  let newStr;
  for (let i = 0; i < wordDict.length; i ++) {
    newStr = str;
    newStr += wordDict[i];
    if (newStr.length <= s.length && DFS(s, newStr, wordDict)) {
      return true;
    }
  }
  return false;
}

// Time Limit Exceeded
