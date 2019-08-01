package p.week2;

public class Sort {

  public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
      int idx = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[idx]) {
          idx = j;
        }
      }
      int temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
      for (int j = i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
          int temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
        } else {
          break;
        }
      }
    }
  }

  public static void shuffleSort(int[] arr) {

  }

}
