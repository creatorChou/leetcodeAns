/**
* 223. Rectangle Area
* https://leetcode.com/problems/rectangle-area/description/
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let area1 = (C - A) * (D - B);
  let area2 = (G - E) * (H - F);
  if (C <= E || A >= G || H <= B || F >= D) {
    return area1 + area2;
  } else {
    let width = Math.min(C, G) - Math.max(A, E);
    let height = Math.min(H, D) - Math.max(F, B);
    return area1 + area2 - width * height;
  }
};
