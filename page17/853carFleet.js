/*
* 853. Car Fleet
* https://leetcode.com/problems/car-fleet/
*/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let cars = [];
  for (let i = 0; i < position.length; i ++) {
    cars.push({
      pos: position[i],
      time: (target - position[i]) / speed[i]
    });
  }
  let sum = position.length;
  cars.sort((a, b) => b.pos - a.pos);
  for (let i = 0; i < position.length - 1; i ++) {
    if (cars[i].time >= cars[i + 1].time) {
      cars[i + 1].time = cars[i].time;
      sum --;
    }
  }
  return sum;
};
// Runtime: 112 ms, faster than 50.00% of JavaScript online submissions for Car Fleet.
