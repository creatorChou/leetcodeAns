/**
* 733. Flood Fill
* https://leetcode.com/problems/flood-fill/
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (color === newColor) return image;
  function fill(sr, sc) {
    if (image[sr] == null || image[sr][sc] !== color) return;
    image[sr][sc] = newColor;
    fill(sr + 1, sc);
    fill(sr - 1, sc);
    fill(sr, sc + 1);
    fill(sr, sc - 1);
  }
  fill(sr, sc);
  return image;
};
