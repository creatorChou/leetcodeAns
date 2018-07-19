/**
* 133. Clone Graph
* https://leetcode.com/problems/clone-graph/description/
*/

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  let map = {};
  function clone(node) {
    if (!node) return node;
    if (map[node.label]) {
      return map[node.label];
    }
    let newNode = new UndirectedGraphNode(node.label);
    map[node.label] = newNode;
    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor));
    }
    return newNode;
  }
  return clone(graph);
};
