/**
* 84. Largest Rectangle in Histogram
* https://leetcode.com/problems/largest-rectangle-in-histogram/description/
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  return heights.length === 0 ? 0 : (function largest(l, r) {
    let minIndex = l;
    for (let i = l + 1; i <= r; i ++) {
      if (heights[i] < heights[minIndex]) {
        minIndex = i;
      }
    }
    let area = heights[minIndex] * (r - l + 1);
    let leftArea, rightArea;
    if (minIndex - 1 < l) {
      leftArea= 0;
    } else {
      leftArea = largest(l, minIndex - 1);
    }
    if (minIndex + 1 > r) {
      rightArea = 0;
    } else {
      rightArea = largest(minIndex + 1, r);
    }
    return Math.max(area, leftArea, rightArea);
  })(0, heights.length - 1);
};

console.log(largestRectangleArea([2,1,5,6,2,3]));
