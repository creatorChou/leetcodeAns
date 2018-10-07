/**
* 412. Fizz Buzz
* https://leetcode.com/problems/fizz-buzz/description/
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let ret = [];
  let fizz = 0, buzz = 0;
  for (let i = 1; i <= n; i ++, fizz ++, buzz ++) {
    let str = "";
    if (fizz === 2) {
      str = "Fizz";
      fizz = -1;
    }
    if (buzz === 4) {
      str += "Buzz";
      buzz = -1;
    }
    if (str === "") {
      str += i;
    }
    ret.push(str);
  }
  return ret;
};

// beat 100%!!
