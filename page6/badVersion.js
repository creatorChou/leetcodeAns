/**
* 278. First Bad Version
* https://leetcode.com/problems/first-bad-version/description/
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let l = 1,
          r = n,
          mid;
      while (l < r - 1) {
        mid = Math.floor((l + r) / 2);
        if (isBadVersion(mid)) {
          r = mid;
        } else {
          l = mid;
        }
      }
      return isBadVersion(l) ? l : r;
    };
};
