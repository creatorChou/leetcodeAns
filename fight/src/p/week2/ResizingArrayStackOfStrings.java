package p.week2;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Iterator;

public class ResizingArrayStackOfStrings<E> implements Iterable<E>, Serializable {
  private E[] s;
  private int head;

  @SuppressWarnings("unchecked")
  public ResizingArrayStackOfStrings() {
    s = (E[])new Object[1];
  }

  public void push(E item) {
    if (s.length == head) {
      resize(s.length * 2);
    }
    s[head++] = item;
  }

  public E pop() {
    E item = s[--head];
    s[head] = null;
    if (head > 0 && head == s.length / 4) {
      resize(s.length / 2);
    }
    return item;
  }

  @SuppressWarnings("unchecked")
  private void resize(int capacity) {
    E[] copy = (E[])new Object[capacity];
    System.arraycopy(s, 0, copy, 0, head);
    s = copy;
  }

  public void printStack() {
    System.out.println(Arrays.toString(s));
  }

  public int size() {
    return s.length;
  }

  public boolean isEmpty() {
    return head == 0;
  }

  public Iterator<E> iterator() {
    return new ResizingArrayStackOfStringsIterator();
  }

  private class ResizingArrayStackOfStringsIterator implements Iterator<E> {
    private int i = 0;

    public boolean hasNext() {
      return i < head;
    }

    public E next() {
      return s[i++];
    }
  }
}
