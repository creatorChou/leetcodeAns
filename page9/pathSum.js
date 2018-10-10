/**
* 437. Path Sum III
* https://leetcode.com/problems/path-sum-iii/description/
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum, arr = []) {
  let count = 0;
  if (root) {
    arr.push(root.val);
    let valueSum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      valueSum += arr[i];
      if (valueSum === sum) {
        count ++;
      }
    }
    count += pathSum(root.left, sum, arr.slice());
    count += pathSum(root.right, sum, arr.slice());
  }
  return count;
};

