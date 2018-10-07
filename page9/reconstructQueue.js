/**
*	406. Queue Reconstruction by Height
*	https://leetcode.com/problems/queue-reconstruction-by-height/description/
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => a[0] - b[0]);
  console.log(people);
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));
