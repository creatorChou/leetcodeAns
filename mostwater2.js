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
      l = 0,
      r = height.length - 1;

  while(l < r) {
    contain = Math.max(contain, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l ++;
    } else {
      r --;
    }
  }

  return contain;
};
