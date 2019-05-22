/**
* 1011. Capacity To Ship Packages Within D Days
* https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
*/

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let lo = 0;
  let hi = 0;
  for (let w of weights) {
    lo = Math.max(lo, w);
    hi += w;
  }
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canFinish(weights, mid, D)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return hi;
};

function canFinish(weights, capacity, D) {
  let count = 0;
  let sum = 0;
  for (let w of weights) {
    if (sum + w > capacity) {
      sum = w;
      count ++;
    } else {
      sum += w;
    }
    if (count > D) return false;
  }
  return ++count <= D;
}

let weights = [3,2,2,4,1,4];
let day = 3;

console.log(shipWithinDays(weights, day));

// Runtime: 84 ms, faster than 70.22% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
// Memory Usage: 38.1 MB, less than 29.59% of JavaScript online submissions for Capacity To Ship Packages Within D Days.


// Runtime: 76 ms, faster than 98.31% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
// Memory Usage: 37.9 MB, less than 37.28% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
