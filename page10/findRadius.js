/**
* Heaters
* https://leetcode.com/problems/heaters/
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let radius = 0;
  heaters.sort((a, b) => a - b);
  for (let i = 0; i < houses.length; i ++) {
    let l = 0, r = heaters.length - 1;
    while (l < r - 1) {
      let mid = Math.floor((l + r) / 2);
      if (houses[i] < heaters[mid]) {
        r = mid;
      } else if (houses[i] > heaters[mid]) {
        l = mid;
      } else {
        r = mid;
        break;
      }
    }
    let minRad = Math.min(Math.abs(houses[i] - heaters[r]), Math.abs(houses[i] - heaters[l]));
    radius = Math.max(radius, minRad);
  }
  return radius;
};
