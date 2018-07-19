/**
*	140. Word Break II
*	https://leetcode.com/problems/word-break-ii/description/
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
	let results = [];
	backtrack(s, [], wordDict, results);
	return results;
};

function backtrack(s, strings, wordDict, results) {
	if (s.length === 0) {
		results.push(strings.join(" "));
		return;
	}
	for (var i = 0; i < wordDict.length; i ++) {
		if (s.indexOf(wordDict[i]) === 0) {
			strings.push(wordDict[i]);
			backtrack(s.substr(wordDict[i].length), strings, wordDict, results);
			strings.pop();
		}
	}
}
// Time Limit Exceeded

var wordBreak2 = function(s, wordDict) {
	if (!canBreak()) return [];
	let start, len, ss, arr, i,
			dp = new Array(s.length);
	for (start = 0; start < s.length; start ++) {
		if (start > 0 && !dp[start - 1]) continue;
		for (len = 1; len <= s.length - start; len ++) {
			ss = s.substr(start, len);
			if (wordDict.indexOf(ss) !== -1) {
				if (!dp[start + len - 1]) {
					dp[start + len - 1] = [];
				}
        if (start > 0) {
          for (i = 0; i < dp[start - 1].length; i ++) {
            dp[start + len - 1].push(dp[start - 1][i] + " " + ss);
          }
        } else {
          dp[start + len - 1].push(ss);
        }
			}
		}
	}
	console.log(dp);
	return dp[dp.length - 1];
};

// Memory Limit Exceeded

wordBreak2("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])

var canBreak = function(s, wordDict) {
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
