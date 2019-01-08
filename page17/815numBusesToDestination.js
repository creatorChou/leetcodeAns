/**
* 815. Bus Routes
* https://leetcode.com/problems/bus-routes/
*/

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function(routes, S, T) {
  if (S === T) return 0;
  let count = 1;
  let passed = new Set();
  let target = new Set();
  passed.add(T);
  target.add(T);
  while (routes.length > 0) {
    let set = new Set();
    target.forEach((val) => {
      for (let i = 0; i < routes.length; i ++) {
        if (routes[i].indexOf(val) !== -1) {
          for (let s of routes[i]) {
            if (!passed.has(s)) {
              passed.add(s);
              set.add(s);
            }
          }
          routes.splice(i, 1)
          i --;
        }
      }
    });
    if (set.has(S)) return count;
    if (set.size === 0) break;
    target = set;
    count ++;
  }
  return -1;
};

// Runtime: 5116 ms, faster than 0.00% of JavaScript online submissions for Bus Routes.
