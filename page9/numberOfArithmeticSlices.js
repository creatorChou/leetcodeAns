/**
*	413. Arithmetic Slices
*	https://leetcode.com/problems/arithmetic-slices/description/
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
	if (!A || A.length < 3) return 0;
  let lens = [0];
  let diff = A[1] - A[0];
  for (let i = 1; i < A.length; i ++) {
  	if (A[i] - A[i - 1] === diff) {
  		lens[lens.length - 1] ++;
  	} else {
  		diff = A[i] - A[i - 1];
  		lens[lens.length - 1] ++;
  		lens.push(1);
  	}
  }
  lens[lens.length - 1] ++;
  let sum = 0;
  for (let i = 0; i < lens.length; i ++) {
  	if (lens[i] < 3) continue;
  	sum += (lens[i] - 1) * (lens[i] - 2) / 2;
  }
  return sum;
};

console.log(numberOfArithmeticSlices([1,2,3,5,7]));


// ---------------------------------------------------------

var numberOfArithmeticSlices = function(A) {
    let s = 0;
    let dp = 0;

    for (let i = 2; i < A.length; i++) {
       if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
           dp = 1 + dp;
           s += dp;
       } else {
           dp = 0;
       }
    }

    return s;
};
