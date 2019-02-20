/**
* 878. Nth Magical Number
* https://leetcode.com/problems/nth-magical-number/
*/

/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
  let lo = 1;
  let hi = 100000000000000;
  let lcm = A * B / gcd(A, B);
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    let n = Math.floor(mid / A) + Math.floor(mid / B) - Math.floor(mid / lcm);
    if (n < N) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return Math.floor(hi % 1000000007);
};

function gcd(a, b) {
  let temp;
  if (a < b) {
    temp = a;
    a = b;
    b = temp;
  }
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// Runtime: 68 ms, faster than 33.33% of JavaScript online submissions for Nth Magical Number.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Nth Magical Number.
