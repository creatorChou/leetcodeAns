import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

class ArrayTest {
  private static int a;

  static void linkedListFor() {
    List<Integer> list = new LinkedList<Integer>();
    for (int i = 0; i < 50000; i++) {
      list.add(i);
    }
    long start = System.currentTimeMillis();
    for (int i = 0; i < list.size(); i++) {
      list.get(i);
    }
    long end = System.currentTimeMillis();
    System.out.println(end - start);
  }

  static void linkedListIter() {
    List<Integer> list = new LinkedList<>();
    for (int i = 0; i < 50000; i++) {
      list.add(i);
    }
    Iterator it = list.iterator();
    long start = System.currentTimeMillis();
    while(it.hasNext()) {
      it.next();
    }
    long end = System.currentTimeMillis();
    System.out.println(end - start);
  }

  static void arrayListFor() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 50000; i++) {
      list.add(i);
    }
    long start = System.currentTimeMillis();
    for (int i = 0; i < list.size(); i++) {
      list.get(i);
    }
    long end = System.currentTimeMillis();
    System.out.println(end - start);
  }

  static void arrayListIter() {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i < 50000; i++) {
      list.add(i);
    }
    Iterator it = list.iterator();
    long start = System.currentTimeMillis();
    while(it.hasNext()) {
      it.next();
    }
    long end = System.currentTimeMillis();
    System.out.println(end - start);
  }
}
