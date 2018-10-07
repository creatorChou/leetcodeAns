/**
*  402. Remove K Digits
*  https://leetcode.com/problems/remove-k-digits/description/
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k === num.length) return "0";
  let prev = "",
    count = 0,
    same = "",
    idx = -1;

  for (let i = 0; i < num.length - 1; i ++) {
    if (num[i] > num[i + 1]) {
      if (same !== "") {
        same += num[i];
        if (count + same.length <= k) {
          count += same.length;
          idx = i + 1;
        } else {
          idx = (i + 1) - (same.length + count - k);
          count = k;
        }
        same = "";
      } else {
        idx = i + 1;
        count ++;
      }
    } else if (num[i] === num[i + 1]) {
      same += num[i];
    } else {
      if (same !== "") {
        prev += same + num[i];
        same = "";
      } else {
        prev += num[i];
      }
    }
    if (count >= k) {
      break;
    }
  }
  console.log(prev, idx, count);
  if (idx === -1) {
    return num.slice(0, num.length - k);
  }
  let ret = prev + num.slice(idx, num.length - k + count);
  let start = 0;
  while (ret[start] === "0") {
    start ++;
  }
  return ret.slice(start);
};

console.log(removeKdigits("1432219", 5));
