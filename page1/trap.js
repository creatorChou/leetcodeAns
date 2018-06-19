/**
* Trapping Rain Water
* https://leetcode.com/problems/trapping-rain-water/description/
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0,
      r = height.length - 1,
      lower,
      level = 0,
      water = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      lower = height[l];
      l ++;
    } else {
      lower = height[r];
      r --;
    }
    level = Math.max(lower, level);
    water += level - lower;
  }
  return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
