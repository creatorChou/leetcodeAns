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

var wordBreak2 = function(s, wordDict) {
  if (s.length === 0) {
    return true;
  }
  for (let i = 0; i < wordDict.length; i ++) {
    if (s.indexOf(wordDict[i]) === 0) {
      if (wordBreak2(s.substr(wordDict[i].length), wordDict)) {
        return true;
      }
    }
  }
  return false;
};
// Time Limit Exceeded

var wordBreak3 = function(s, wordDict) {
  let start, len, ss,
      dp = new Array(s.length);

  for (start = 0; start < s.length; start ++) {
    if (start !== 0 && dp[start - 1] !== true) continue;
    for (len = 1; len <= s.length - start; len ++) {
      ss = s.substr(start, len);
      if (wordDict.indexOf(ss) !== -1) {
        dp[start + len - 1] = true;
      }
    }
  }
  return dp[dp.length - 1] || false;
};

wordBreak3("aaaaaaa",["aaaa","aa"]);