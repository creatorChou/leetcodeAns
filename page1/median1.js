/**
* Median of Two Sorted Arrays
* https://leetcode.com/problems/median-of-two-sorted-arrays/description/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let nums1Index = 0,
      nums2Index = 0,
      sumLength = nums1.length + nums2.length,
      medianIndex = sumLength / 2,
      medianIndex1, medianIndex2,
      medianValue1, medianValue2;

  if (medianIndex % 1 === 0) {
    medianIndex1 = medianIndex - 1;
    medianIndex2 = medianIndex;
  } else {
    medianIndex1 = Math.floor(medianIndex);
    medianIndex2 = medianIndex1;
  }

  let num1, num2;
  for(let i=0; i<=medianIndex+1; i++) {
    num1 = nums1[nums1Index];
    num2 = nums2[nums2Index];
    if (typeof num1 !== "undefined" && typeof num2 !== "undefined") {
      if (num1 < num2) {
        if (i === medianIndex1) {
          medianValue1 = nums1[nums1Index];
        }
        if (i === medianIndex2) {
          medianValue2 = nums1[nums1Index];
        }
        nums1Index ++;
      } else {
        if (i === medianIndex1) {
          medianValue1 = nums2[nums2Index];
        }
        if (i === medianIndex2) {
          medianValue2 = nums2[nums2Index];
        }
        nums2Index ++;
      }
    } else if (typeof num1 === "undefined" && typeof num2 !== "undefined") {
      if (i === medianIndex1) {
        medianValue1 = nums2[nums2Index];
      }
      if (i === medianIndex2) {
        medianValue2 = nums2[nums2Index];
      }
      nums2Index ++;
    } else if (typeof num2 === "undefined" && typeof num1 !== "undefined") {
      if (i === medianIndex1) {
        medianValue1 = nums1[nums1Index];
      }
      if (i === medianIndex2) {
        medianValue2 = nums1[nums1Index];
      }
      nums1Index ++;
    } else {
      break;
    }
  }

  return (medianValue1 + medianValue2)/2;
};

var median = findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]);

console.log(median);
