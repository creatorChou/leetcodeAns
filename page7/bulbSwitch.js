/**
* 319. Bulb Switcher
* https://leetcode.com/problems/bulb-switcher/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i ++) {
    let status = 0;
    for (let j = 1; j <= n; j ++) {
      if (i % j === 0) {
        status ++;
      }
    }
    if (status % 2 === 1) {
      sum ++;
    }
  }
  return sum;
};

console.log(bulbSwitch(164));

// Time Limit Exceeded

var bulbSwitch2 = function(n) {
  let sum = 0;
  for (let i = 1; i * i <= n; i ++) {
    sum ++;
  }
  return sum;
};

console.log(bulbSwitch2(164));

var bulbSwitch3 = function(n) {
  return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch3(164));

// x * x generates single only
// 14:
// 1 * 14
// 2 * 7
// 7 * 2
// 14 * 1
// => 4
// 16:
// 1 * 16
// 2 * 8
// 4 * 4
// 8 * 2
// 16 * 1
// => 5
