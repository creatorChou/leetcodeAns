/**
* 881. Boats to Save People
* https://leetcode.com/problems/boats-to-save-people/
*/

// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

// Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let memo = new Array(people.length);
  for (let i = people.length - 1; i >= 0; i--) {
    if (memo[i]) continue;
    count ++;
    for (let j = i - 1; j >= 0; j --) {
      if (memo[j]) continue;
      if (people[i] + people[j] <= limit) {
        memo[j] = true;
        break;
      }
    }
  }
  return count;
};

console.log(numRescueBoats([3,2,2,1], 3));
// Runtime: 13532 ms

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats2 = function(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let lo = 0, hi = people.length - 1;
  while (lo <= hi) {
    count ++;
    if (people[lo] + people[hi] <= limit) lo ++;
    hi --;
  }
  return count;
};
//  176 ms
