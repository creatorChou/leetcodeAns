/**
* Construct the Rectangle
* https://leetcode.com/problems/construct-the-rectangle/
*/

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let L = area, W = 1;
  for (let i = 2; i < area; i ++) {
    let newL = area / i;
    if (newL < i) break;
    if (area % i !== 0) continue;
    L = newL;
    W = i;
  }
  return [L, W];
};

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Construct the Rectangle.
