/**
* 804. Unique Morse Code Words
* https://leetcode.com/problems/unique-morse-code-words/
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let morseCodes = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  }
  let set = new Set();
  for (let word of words) {
    let str = "";
    for (let c of word) {
      str += morseCodes[c];
    }
    set.add(str);
  }
  return set.size;
};
