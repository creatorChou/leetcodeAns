/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sum = 0;
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
    return [];
};

var result = twoSum([2, 7, 11, 15], 9);

console.log(result);