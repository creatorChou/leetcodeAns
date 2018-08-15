/**
* 275. H-Index II
* https://leetcode.com/problems/h-index-ii/description/
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let l = 0,
      r = citations.length - 1,
      mid, count,
      len = citations.length;

  while (l < r - 1) {
    mid = Math.floor((l + r) / 2);
    count = len - mid;
    if (count < citations[mid]) {
      r = mid;
    } else if (count > citations[mid]) {
      l = mid;
    } else {
      return count;
    }
  }
  if (len - l <= citations[l]) {
    return len - l;
  } else if (len - r <= citations[r]) {
    return len - r;
  } else {
    return 0;
  }
};
