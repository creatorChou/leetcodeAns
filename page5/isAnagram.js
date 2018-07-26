/**
*	242. Valid Anagram
*	https://leetcode.com/problems/valid-anagram/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	let hash1 = new Array(26).fill(0);
	let hash2 = new Array(26).fill(0);
	let i;
	for (i = 0; i < s.length; i ++) {
		hash1[s[i].charCodeAt() - 97] ++;
		hash2[t[i].charCodeAt() - 97] ++;
	}
	for (i = 0; i < 26; i ++) {
		if (hash1[i] !== hash2[i]) {
			return false;
		}
	}
	return true;
};
