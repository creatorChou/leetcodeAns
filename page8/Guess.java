/**
* 374. Guess Number Higher or Lower
* https://leetcode.com/problems/guess-number-higher-or-lower/description/
*/


/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Guess extends GuessGame {
  public int guessNumber(int n) {
    int l = 1, r = n;
    while (l <= r) {
      if (guess(l) == 0) return l;
      if (guess(r) == 0) return r;
      int mid = l / 2 + r / 2;
      int ans = guess(mid);
      if (ans < 0) {
        r = mid - 1;
      } else if (ans > 0) {
        l = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}
// 2126753390
// 1702766719
