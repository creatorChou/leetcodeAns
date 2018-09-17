/**
*	390. Elimination Game
*	https://leetcode.com/problems/elimination-game/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let head = 1;
  let step = 1;
  let remain = n;
  let fromLeft = true;
  while (remain > 1) {
  	if (fromLeft) {
  		head += step;
  	} else {
  		if (remain % 2 === 1) {
  			head += step;
  		}
  	}
  	step = step * 2;
  	remain = Math.floor(remain / 2);
  	fromLeft = !fromLeft;
  }
  return head;
};

console.log(lastRemaining(87))


/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    if(n === 1) {
        return 1;
    }
    
    if(n === 2) {
        return 2;
    }
    
    if(n % 2) {
        n = n - 1;
    }
    
    return 2 * (n/2 + 1 - lastRemaining(n/2));
};
