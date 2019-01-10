/**
* 832. Flipping an Image
* https://leetcode.com/problems/flipping-an-image/
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let rdef = A[0].length - 1;
  let changeMid = rdef % 2 === 0;
  for (let arr of A) {
    let l = 0;
    let r = rdef;
    while (l < r) {
      arr[l] = Number(!arr[l]);
      arr[r] = Number(!arr[r]);
      arr[l] ^= arr[r];
      arr[r] ^= arr[l];
      arr[l] ^= arr[r];
      l ++;
      r --;
    }
    if (changeMid) {
      arr[l] = Number(!arr[l]);
    }
  }
  return A;
};
