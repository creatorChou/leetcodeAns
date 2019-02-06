/**
* 869. Reordered Power of 2
* https://leetcode.com/problems/reordered-power-of-2/
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
  let s = String(N);
  let charMap = {};
  for (let c of s) {
    if (charMap[c]) {
      charMap[c] ++;
    } else {
      charMap[c] = 1;
    }
  }
  let num = 1;
  let sNum = "1";
  while (sNum.length <= s.length) {
    if (sNum.length === s.length) {
      let map = {};
      for (let c of sNum) {
        if (map[c]) {
          map[c] ++;
        } else {
          map[c] = 1;
        }
      }
      let allMatch = true;
      for (let c in charMap) {
        if (charMap[c] !== map[c]) {
          allMatch = false;
          break;
        }
      }
      if (allMatch) return true;
    }
    num *= 2;
    sNum = String(num);
  }
  return false;
};

// Runtime: 76 ms, faster than 40.00% of JavaScript online submissions for Reordered Power of 2.
// Memory Usage: 15.2 MB, less than 50.00% of JavaScript online submissions for Reordered Power of 2.



// [1, 2, 4, 8, 
// 16, 32, 64, 
// 128, 256, 512,
// 1024, 2048, 4096, 8192,
// 16384, 32768, 65536,
// 131072, 262144, 524288,
// 1048576, 2097152, 4194304, 8388608,
// 16777216, 33554432, 67108864, 
// 134217728, 268435456, 536870912, 
// 1073741824]

/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
  let s = String(N);
  let charMap = {};
  for (let c of s) {
    if (charMap[c]) {
      charMap[c] ++;
    } else {
      charMap[c] = 1;
    }
  }
  let arr = {"1":[{"1":1},{"2":1},{"4":1},{"8":1}],"2":[{"1":1,"6":1},{"2":1,"3":1},{"4":1,"6":1}],"3":[{"1":1,"2":1,"8":1},{"2":1,"5":1,"6":1},{"1":1,"2":1,"5":1}],"4":[{"0":1,"1":1,"2":1,"4":1},{"0":1,"2":1,"4":1,"8":1},{"0":1,"4":1,"6":1,"9":1},{"1":1,"2":1,"8":1,"9":1}],"5":[{"1":1,"3":1,"4":1,"6":1,"8":1},{"2":1,"3":1,"6":1,"7":1,"8":1},{"3":1,"5":2,"6":2}],"6":[{"0":1,"1":2,"2":1,"3":1,"7":1},{"1":1,"2":2,"4":2,"6":1},{"2":2,"4":1,"5":1,"8":2}],"7":[{"0":1,"1":1,"4":1,"5":1,"6":1,"7":1,"8":1},{"0":1,"1":1,"2":2,"5":1,"7":1,"9":1},{"0":1,"1":1,"3":1,"4":3,"9":1},{"0":1,"3":1,"6":1,"8":4}],"8":[{"1":2,"2":1,"6":2,"7":3},{"2":1,"3":3,"4":2,"5":2},{"0":1,"1":1,"4":1,"6":2,"7":1,"8":2}],"9":[{"1":2,"2":2,"3":1,"4":1,"7":2,"8":1},{"2":1,"3":1,"4":2,"5":2,"6":2,"8":1},{"0":1,"1":1,"2":1,"3":1,"5":1,"6":1,"7":1,"8":1,"9":1}],"10":[{"0":1,"1":2,"2":1,"3":1,"4":2,"7":2,"8":1}]}[s.length];
  for (let map of arr) {
    let allMatch = true;
    for (let c in charMap) {
      if (charMap[c] !== map[c]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) return true;
  }
  return false;
};

// Runtime: 72 ms, faster than 45.00% of JavaScript online submissions for Reordered Power of 2.
// Memory Usage: 16.3 MB, less than 50.00% of JavaScript online submissions for Reordered Power of 2.
