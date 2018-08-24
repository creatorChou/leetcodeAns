/**
* 347. Top K Frequent Elements
* https://leetcode.com/problems/top-k-frequent-elements/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map(), count;
  for (let i = 0; i < nums.length; i ++) {
    count = map.get(nums[i]);
    map.set(nums[i], count === undefined ? 1 : count + 1);
  }
  let bucket = [];
  map.forEach((value, key, map) => {
    if (bucket[value]) {
      bucket[value] = bucket[value].concat(key);
    } else {
      bucket[value] = [key];
    }
  });
  let result = [], num;
  while (result.length < k && bucket.length > 0) {
    num = bucket.pop();
    if (num) {
      result = result.concat(num);
    }
  }
  result.length = k;
  return result;
};
