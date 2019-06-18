import edu.princeton.cs.algs4.ResizingArrayStack;
import edu.princeton.cs.algs4.StdOut;
import p.week2.MyQueue;
import p.week2.ResizingArrayQueue;

import java.util.Iterator;

class QueueTest {
  
  private static String[] arr = {"to", "be", "or", "not", "to", "-", "be", "-", "-", "that", "-", "-", "-", "is"};
  
  static void tryMyQueue() {
    MyQueue<String> myQueue = new MyQueue<>();
    for (String s : arr) {
      if (s.equals("-")) {
        if (!myQueue.isEmpty()) {
          System.out.println(myQueue.dequeue());
        }
      } else {
        myQueue.enqueue(s);
      }
    }
    myQueue.printQueue();
  }

  static void tryResizingArrayQueue() {
    ResizingArrayQueue<String> myQueue = new ResizingArrayQueue<>();
    StringBuilder popMemo = new StringBuilder();
    for (String s : arr) {
      if (s.equals("-")) {
        if (!myQueue.isEmpty()) {
          popMemo.append(myQueue.dequeue());
          popMemo.append(" ");
        }
      } else {
        myQueue.enqueue(s);
      }
    }
    popMemo.deleteCharAt(popMemo.length() - 1);
    System.out.println(popMemo);
    StringBuilder rest = new StringBuilder();
    for (String s : myQueue) {
      rest.append(s);
      rest.append(" ");
    }
    rest.deleteCharAt(rest.length() - 1);
    System.out.println(rest);
  }
}
