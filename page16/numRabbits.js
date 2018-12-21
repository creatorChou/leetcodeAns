/**
* 781. Rabbits in Forest
* https://leetcode.com/problems/rabbits-in-forest/
*/

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let sum = 0;
  let map = {};
  for (let n of answers) {
    let key = n + 1;
    if (map[key] != null) {
      map[key] ++;
      if (map[key] === key){
        delete map[key];
        sum += key;
      }
    } else {
      if (key === 1){
        sum ++;
      } else {
        map[key] = 1;
      }
    }
  }
  for (let num in map) {
    sum += parseInt(num);
  }
  return sum;
};

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Rabbits in Forest.
