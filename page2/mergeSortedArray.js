/**
* 88. Merge Sorted Array
* https://leetcode.com/problems/merge-sorted-array/description/
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let queue = [],
      queueNum, num1, num2;
  for (var i = 0; i < nums1.length; i ++) {
    num1 = nums1[i];
    num2 = nums2[0];
    queueNum = queue[0];
    if (typeof num2 === "undefined" && typeof queueNum === "undefined") {
      break;
    }
    if (i < m) {
      if (typeof num2 !== "undefined" && typeof queueNum === "undefined") {
        if (num2 < num1) {
          queue.push(num1);
          nums1[i] = num2;
          nums2.shift();
        }
      } else if (typeof num2 === "undefined" && typeof queueNum !== "undefined") {
        if (queueNum < num1) {
          queue.push(num1);
          nums1[i] = queueNum;
          queue.shift();
        }
      } else {
        if (num2 < num1 && num2 <= queueNum) {
          queue.push(num1);
          nums1[i] = num2;
          nums2.shift();
        } else if (queueNum < num1 && queueNum <= num2) {
          queue.push(num1);
          nums1[i] = queueNum;
          queue.shift();
        }
      }
    } else {
      if (typeof num2 !== "undefined" && typeof queueNum === "undefined") {
        nums1[i] = num2;
        nums2.shift();
      } else if (typeof num2 === "undefined" && typeof queueNum !== "undefined") {
        nums1[i] = queueNum;
        queue.shift();
      } else {
        if (num2 < queueNum) {
          nums1[i] = num2;
          nums2.shift();
        } else {
          nums1[i] = queueNum;
          queue.shift();
        }
      }
    }
    console.log(nums1, nums2, queue)
  }

  nums1.length = m + n;
  console.log(nums1);
};

merge([-1,0,1,1,0,0,0,0,0], 4, [-1,0,2,2,3], 5);
