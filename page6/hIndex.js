/**
* 274. H-Index
* https://leetcode.com/problems/h-index/description/
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i ++) {
    if (citations[i] < i + 1) {
      return i;
    }
  }
  return citations.length;
};
