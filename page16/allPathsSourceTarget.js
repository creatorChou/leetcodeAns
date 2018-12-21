/**
* 797. All Paths From Source to Target
* https://leetcode.com/problems/all-paths-from-source-to-target/
*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let result = [];
  dfs(graph, result, [0]);
  return result;
};

function dfs (graph, result, passed) {
  let i = passed[passed.length - 1];
  if (i === graph.length - 1) {
    result.push(passed.slice());
    return;
  };
  let arr = graph[i];
  for (let idx of arr) {
    if (passed.indexOf(idx) === -1) {
      passed.push(idx);
      dfs(graph, result, passed, idx);
      passed.pop();
    }
  }
}

// Runtime: 116 ms, faster than 88.73% of JavaScript online submissions for All Paths From Source to Target.
