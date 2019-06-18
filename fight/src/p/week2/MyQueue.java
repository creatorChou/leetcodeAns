package p.week2;

public class MyQueue<E> {
  private Node head, tail;

  private class Node{
    E item;
    Node next;
  }

  public MyQueue() {
    head = null;
    tail = null;
  }

  public void enqueue(E item) {
    Node newNode = new Node();
    newNode.item = item;
    newNode.next = null;
    Node oldTail = tail;
    tail = newNode;
    if (isEmpty()) {
      head = tail;
    } else {
      oldTail.next = tail;
    }
  }

  public E dequeue() {
    E item = head.item;
    head = head.next;
    if (isEmpty()) {
      tail = null;
    }
    return item;
  }

  public boolean isEmpty() {
    return head == null;
  }

  public void printQueue() {
    Node node = head;
    while (node != null) {
      System.out.print(node.item.toString() + " ");
      node = node.next;
    }
  }
}
