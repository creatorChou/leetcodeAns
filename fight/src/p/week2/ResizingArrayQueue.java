package p.week2;

import java.util.Arrays;
import java.util.Iterator;

public class ResizingArrayQueue<E> implements Iterable<E>{
  private E[] q;
  private int head, tail;

  @SuppressWarnings("unchecked")
  public ResizingArrayQueue() {
    q = (E[])new Object[2];
  }

  public void enqueue(E item) {
    if (tail == q.length) {
      resize((tail - head) * 2);
    }
    q[tail++] = item;
  }

  public E dequeue() {
    if (isEmpty()) { return null; }
    E item = q[head];
    q[head] = null;
    head++;
    if ((tail - head + 1) == q.length / 4) {
      resize(q.length / 2);
    }
    return item;
  }

  public boolean isEmpty() {
    return head == tail;
  }

  @SuppressWarnings("unchecked")
  private void resize(int sz) {
    E[] copy = (E[])new Object[sz];
    int len = tail - head;
//    System.out.println(Arrays.toString(q) + " " + len + " " + sz);
    System.arraycopy(q, head, copy, 0, len);
    head = 0;
    tail = len;
    q = copy;
  }

  public Iterator<E> iterator() {
    return new ResizingArrayQueueIterator();
  }

  private class ResizingArrayQueueIterator implements Iterator<E> {
    private int i = head;
    public boolean hasNext() { return i < tail; }
    public E next() {
      return q[i++];
    }
  }
}
