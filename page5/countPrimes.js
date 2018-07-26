/**
* 204. Count Primes
* https://leetcode.com/problems/count-primes/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;
  let count = 1, i, j, prime;
  for (i = 3; i < n; i ++) {
    if (i % 2 === 0) continue;
    prime = true;
    for (j = 3; j < i; j ++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count ++;
    }
  }
  return count;
};

// Time Limit Exceeded

var countPrimes2 = function(n) {
  if (n < 3) return 0;
  let arr = [2],
      i, j, isPrime;
  for (i = 3; i < n; i += 2) {
    isPrime = true;
    for (j = 0; j < arr.length; j ++) {
      if (i % arr[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr.length;
};

// Time Limit Exceeded


var countPrimes3 = function(n) {
  if (n < 3) return 0;
  let arr = new Array(n),
      i, j;
  for (i = 2; i <= Math.sqrt(n); i ++) {
    if (!arr[i]) {
      for (j = i * i; j < n; j += i) {
        arr[j] = true;
      }
    }
  }
  let count = 0;
  for (i = 2; i < n; i ++) {
    if (!arr[i]) count ++;
  }
  return count;
};
