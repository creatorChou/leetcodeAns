/**
* 345. Reverse Vowels of a String
* https://leetcode.com/problems/reverse-vowels-of-a-string/description/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let l = 0,
      r = s.length - 1,
      arr = s.split(""),
      temp,
      vowels = new Set(["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"]);

  while (l < r) {
    if (!vowels.has(arr[l])) {
      l ++;
    }
    if (!vowels.has(arr[r])) {
      r --;
    }
    if (vowels.has(arr[l]) && vowels.has(arr[r])) {
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l ++;
      r --;
    }
  }
  return arr.join("");
};
