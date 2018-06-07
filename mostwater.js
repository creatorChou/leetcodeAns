/**
* Container With Most Water
* https://leetcode.com/problems/container-with-most-water/description/
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let contain = 0,
      i, j;
  for (i = 0; i < height.length; i ++) {
    for (j = i + 1; j < height.length; j ++) {
      contain = Math.max((j - i) * Math.min(height[i], height[j]), contain);
    }
  }
  return contain;
};
