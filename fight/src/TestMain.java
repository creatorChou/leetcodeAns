import p.week2.Sort;

import java.util.Arrays;

public class TestMain {
  public static void main(String[] args) {
//    UnionFindTest.tryQuickFindUF();
//    UnionFindTest.tryQuickUnionUF();
//    UnionFindTest.testJar();
//
//    ArrayTest.linkedListFor();
//    ArrayTest.linkedListIter();
//    ArrayTest.arrayListFor();
//    ArrayTest.arrayListIter();

//    StackTest.tryStackOfStrings();
//    StackTest.tryFixedCapacityStackOfStrings();
//    StackTest.tryResizingArrayStackOfStrings();

//    QueueTest.tryMyQueue();
//    QueueTest.tryResizingArrayQueue();

//    StackTest.twoStackTest();

    int[] arr1 = SortTest.getRandomArray();
    int[] arr2 = Arrays.copyOf(arr1, arr1.length);

    long start1 = System.currentTimeMillis();
    Sort.selectionSort(arr1);
    long end1 = System.currentTimeMillis();
    System.out.println("selection sort: " + (end1 - start1));

    long start2 = System.currentTimeMillis();
    Sort.insertionSort(arr2);
    long end2 = System.currentTimeMillis();
    System.out.println("insertion sort: " + (end2 - start2));


  }

}
