package p.week2;

public class StackOfStrings {

  private int sz;

  private Node head;

  public StackOfStrings() {
    sz = 0;
    head = null;
  }

  public void push(String item) {
    Node n = new Node();
    n.item = item;
    n.next = head;
    head = n;
    sz ++;
  }

  public String pop() {
    if (isEmpty()) throw new ArrayIndexOutOfBoundsException();
    Node n = head;
    head = n.next;
    sz --;
    return n.item;
  }

  public boolean isEmpty() {
    return size() == 0;
  }

  public int size() {
    return sz;
  }

  private class Node {
    String item;
    Node next;
  }
}
