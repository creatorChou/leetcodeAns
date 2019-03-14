/**
* https://leetcode.com/problems/super-palindromes/
* 906. Super Palindromes
*/

/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
var superpalindromesInRange = function(L, R) {
  L = parseInt(L);
  R = parseInt(R);
  let count = 0;
  for (let i = 1; i < 10000; i ++) {
    let base = String(i);
    let len = base.length;
    for (let j = len - 1; j >= 0; j--) {
      base += base[j];
    }
    base = parseInt(base);
    let num = base * base;
    if (num > R) break;
    if (num >= L && isP(num)) {
      count ++;
    }
  }
  for (let i = 1; i < 10000; i ++) {
    let base = String(i);
    let len = base.length;
    for (let j = len - 2; j >= 0; j--) {
      base += base[j];
    }
    base = parseInt(base);
    let num = base * base;
    if (num > R) break;
    if (num >= L && isP(num)) {
      count ++;
    }
  }
  return count;
};

function isP(num) {
  let s = num + "";
  console.log(num)
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l ++;
    r --;
  }
  return true;
}

// console.log(superpalindromesInRange("184698234", "34957493574938312"));
console.log(superpalindromesInRange("38455498359", "999999999999999999"));
// console.log(superpalindromesInRange("1", "100000000000000000"));
// console.log(superpalindromesInRange("4", "1000"));
