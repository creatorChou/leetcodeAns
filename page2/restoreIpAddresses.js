/**
* 93. Restore IP Addresses
* https://leetcode.com/problems/restore-ip-addresses/description/
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (!s || s.length < 4) {
    return [];
  }
  let result = [];
  backtrack(result, s, [], 0);
  return result;
};

var backtrack = function(result, s, arr, start) {
  if (arr.length === 4) {
    let ip = arr.join(".");
    if (ip.length === s.length + 3 && result.indexOf(ip) === -1) {
      result.push(ip);
    }
    return;
  }
  let num;
  for (let i = 1; i <= 3; i ++) {
    num = parseInt(s.slice(start, start + i));
    if (num >= 0 && num <= 255) {
      arr.push(num);
      backtrack(result, s, arr, start + i);
      arr.pop();
    }
  }
}


console.log(restoreIpAddresses("25525511135"));
