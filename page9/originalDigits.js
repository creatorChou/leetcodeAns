/**
* 423.Reconstruct Original Digits from English
* https://leetcode.com/problems/reconstruct-original-digits-from-english/
*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let letters = {
    o: 0,
    n: 0,
    e: 0,
    t: 0,
    w: 0,
    h: 0,
    r: 0,
    f: 0,
    u: 0,
    i: 0,
    v: 0,
    s: 0,
    x: 0,
    g: 0,
    z: 0
  }
  let numCountArr = new Array(10).fill("");
  for (let i = 0; i < s.length; i ++) {
    letters[s[i]] ++;
  }
  for (let i = 0; i < letters.z; i ++) {
    numCountArr[0] += "0";
  }
  letters.r -= letters.z;
  letters.o -= letters.z;
  for (let i = 0; i < letters.w; i ++) {
    numCountArr[2] += "2";
  }
  letters.o -= letters.w;
  for (let i = 0; i < letters.u; i ++) {
    numCountArr[4] += "4";
  }
  letters.f -= letters.u;
  letters.o -= letters.u;
  letters.r -= letters.u;
  for (let i = 0; i < letters.o; i ++) {
    numCountArr[1] += "1";
  }
  for (let i = 0; i < letters.r; i ++) {
    numCountArr[3] += "3";
  }
  for (let i = 0; i < letters.f; i ++) {
    numCountArr[5] += "5";
  }
  letters.i -= letters.f;
  for (let i = 0; i < letters.x; i ++) {
    numCountArr[6] += "6";
  }
  letters.s -= letters.x;
  letters.i -= letters.x;
  for (let i = 0; i < letters.s; i ++) {
    numCountArr[7] += "7";
  }
  for (let i = 0; i < letters.g; i ++) {
    numCountArr[8] += "8";
  }
  letters.i -= letters.g;
  for (let i = 0; i < letters.i; i ++) {
    numCountArr[9] += "9";
  }

  return numCountArr.join("");
};

console.log(originalDigits("zfsrvxieefiuoro"));
