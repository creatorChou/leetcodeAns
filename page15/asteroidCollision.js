/**
* 735. Asteroid Collision
* https://leetcode.com/problems/asteroid-collision/
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  if (!asteroids || asteroids.length < 2) return asteroids;
  let stack = [asteroids[0]];
  for (let i = 1; i < asteroids.length; i ++) {
    if (stack[stack.length - 1] > 0 && asteroids[i] > 0 || stack[stack.length - 1] < 0 && asteroids[i] < 0) {
      stack.push(asteroids[i]);
    } else {
      if (stack[stack.length - 1] > 0) {
        let win = true;
        let curr = Math.abs(asteroids[i]);
        while (stack.length > 0) {
          if (stack[stack.length - 1] > 0 && asteroids[i] > 0 || stack[stack.length - 1] < 0 && asteroids[i] < 0) {
            break;
          } else {
            let top = Math.abs(stack[stack.length - 1]);
            if (top < curr) {
              stack.pop();
            } else if (top > curr) {
              win = false;
              break;
            } else {
              stack.pop();
              win = false;
              break;
            }
          }
        }
        if (win) {
          stack.push(asteroids[i]);
        }
      } else {
        stack.push(asteroids[i]);
      }
    }
  }
  return stack;
};

// Runtime: 68 ms, faster than 83.70% of JavaScript online submissions for Asteroid Collision.
