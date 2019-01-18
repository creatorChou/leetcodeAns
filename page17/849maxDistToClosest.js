/**
* 849. Maximize Distance to Closest Person
* https://leetcode.com/problems/maximize-distance-to-closest-person/
*/

/**
 * @param {number[]} seats
 * @return {number}
 */
//  In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to closest person.

var maxDistToClosest = function(seats) {
  let prev = null;
  let max = 1;
  let i = 0;
  for (; i < seats.length; i ++) {
    if (seats[i] === 1) {
      max = Math.max(i, max);
      prev = i;
      break;
    }
  }
  for (; i < seats.length; i ++) {
    if (seats[i] === 1) {
      max = Math.max(Math.floor((i - prev) / 2), max);
      prev = i;
    }
  }
  if (prev !== seats.length - 1) {
    max = Math.max(seats.length - 1 - prev, max);
  }
  return max;
};
