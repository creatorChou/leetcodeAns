/**
* 880. Decoded String at Index
* https://leetcode.com/problems/decoded-string-at-index/
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
  if (K === 0) return S[0];
  let s = "";
  let repeat = "";
  let strs = [];
  let repeats = [];
  for (let i = 0; i < S.length; i ++) {
    if (/[0-9]/.test(S[i])) {
      repeat += S[i];
    } else {
      if (/[0-9]/.test(S[i-1])) {
        strs.push(s);
        repeats.push(parseInt(repeat));
        s = S[i];
        repeat = "";
      } else {
        s += S[i];
      }
    }
  }
  if (s.length > 0) {
    if (repeat === "") repeat = 1;
    strs.push(s);
    repeats.push(parseInt(repeat));
  }
  let len = 0;
  let ss = "";
  for (let i = 0; i < strs.length; i ++) {
    ss += strs[i];
    if (K <= ss.length * repeats[i]) {
      let idx = K % ss.length;
      if (idx === 0) idx = ss.length;
      return ss[idx - 1];
    } else {
      ss = ss.repeat(repeats[i]);
    }
    if (ss.length > K) {
      return ss[K - 1];
    }
  }
  return "";
};
// wrong

var decodeAtIndex = function (S, K) {
  let 展開後文字列の長さ = 0;
  let 位置 = 0;
  for (; 位置 < S.length; 位置 ++) {
    if (/[0-9]/.test(S[位置])) {
      展開後文字列の長さ *= parseInt(S[位置]);
    } else {
      展開後文字列の長さ ++;
    }
  }
  位置--;
  for (; 位置 >= 0; 位置--) {
    K %= 展開後文字列の長さ;
    if (/[0-9]/.test(S[位置])) {
      // JS少数バグ
      展開後文字列の長さ = Math.round(展開後文字列の長さ / parseInt(S[位置]));
    } else {
      if (K === 0) {
        return S[位置];
      }
      展開後文字列の長さ --;
    }
  }
  return "";
}

// Runtime: 68 ms, faster than 54.55% of JavaScript online submissions for Decoded String at Index.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Decoded String at Index.
