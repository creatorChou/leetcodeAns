import p.week2.Sort;

import java.util.Arrays;

public class SortTest {

  static int[] getRandomArray() {
    int[] arr = new int[100000];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = (int)(Math.random() * 10000);
    }
    return arr;
  }
}
