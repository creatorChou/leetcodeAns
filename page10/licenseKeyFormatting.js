/**
* License Key Formatting
* https://leetcode.com/problems/license-key-formatting/
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let count = 0;
  let ret = "";
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === "-") continue;
    ret = S[i] + ret;
    count ++;
    if (count === K) {
      count = 0;
      ret = "-" + ret;
    }
  }
  if (ret[0] === "-") {
    ret = ret.slice(1);
  }
  return ret.toUpperCase();
};
