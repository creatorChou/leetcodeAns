/**
* 748. Shortest Completing Word
* https://leetcode.com/problems/shortest-completing-word/
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  mergeSort(words);
  let map = {};
  for (let c of licensePlate.toLowerCase().replace(/[A-Z0-9]|\s/g, "")) {
    if (map[c]) {
      map[c] ++;
    } else {
      map[c] = 1;
    }
  }
  for (let word of words) {
    let map2 = {};
    for (let c of word.toLowerCase()) {
      if (map2[c]) {
        map2[c] ++;
      } else {
        map2[c] = 1;
      }
    }
    let isContain = true;
    for (let k in map) {
      if (map2[k] == null || map[k] > map2[k]) {
        isContain = false;
        break;
      }
    }
    if (isContain) return word;
  }

};

function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}

function _mergeSort(arr, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  _mergeSort(arr, start, mid);
  _mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let temp1 = arr.slice(start, mid + 1);
  let temp2 = arr.slice(mid + 1, end + 1);
  let k = start;
  while (temp1.length > 0 && temp2.length > 0) {
    arr[k] = temp1[0].length < temp2[0].length ? temp1.shift() : temp2.shift();
    k ++;
  }
  let rest = temp1.concat(temp2);
  while (rest.length > 0) {
    arr[k] = rest.shift();
    k ++;
  }
}
