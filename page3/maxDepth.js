/**
* 104. Maximum Depth of Binary Tree
* https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0,
      nodes = [root],
      arr,
      i,
      node;
  while(nodes.length > 0) {
    arr = [];
    for (i = 0; i < nodes.length; i ++) {
      if (nodes[i].left) {
        arr.push(nodes[i].left);
      }
      if (nodes[i].right) {
        arr.push(nodes[i].right);
      }
    }
    if (arr.length > 0) {
      depth ++;
    }
    nodes = arr;
  }
  return depth;
};

var maxDepth2 = function(root) {
  if (root) {
    return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1;
  } else {
    return 0;
  }
};

var tree = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    },
    right: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}

console.log(maxDepth(tree));
