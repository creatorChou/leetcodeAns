/**
*	386. Lexicographical Numbers
*	https://leetcode.com/problems/lexicographical-numbers/description/
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let ret = [1];
  while (ret.length < n) {
  	let before = ret[ret.length - 1];
  	if (before * 10 <= n) {
  		ret.push(before * 10);
  	} else {
  		let top = Math.floor(before / 10) * 10 + 10;
  		let now = before;
  		for (let i = 1; i <= 9; i ++) {
  			now = before + i;
  			if (now <= n && now < top) {
  				ret.push(now);
  			} else {
  				break;
  			}
  		}
  		while (top % 10 === 0) {
  			top /= 10;
  		}
  		ret.push(Math.floor(top));
  	}
  }
  ret.length = n;
  return ret;
};

console.log(lexicalOrder(1341))

// beat 100%!
