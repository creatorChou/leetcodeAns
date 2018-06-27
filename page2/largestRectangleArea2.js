/**
* 84. Largest Rectangle in Histogram
* https://leetcode.com/problems/largest-rectangle-in-histogram/description/
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < heights.length; i ++) {
    max = Math.max(max, heights[i] * (heights.length - i));
  }
  return max;
};

console.log(largestRectangleArea([]));

// x
