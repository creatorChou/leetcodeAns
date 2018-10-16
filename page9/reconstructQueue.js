/**
*	406. Queue Reconstruction by Height
*	https://leetcode.com/problems/queue-reconstruction-by-height/description/
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(people);
  for (let i = 1; i < people.length; i ++) {
    let idx = people[i][1];
    for (let j = i; j > idx; j--) {
      let temp = people[j - 1];
      people[j - 1] = people[j];
      people[j] = temp;
    }
  }

  return people;
};

let arr1 = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];

let arr2 = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];

console.log(reconstructQueue(arr1));
