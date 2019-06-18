package p.week2;

public class FixedCapacityStackOfStrings {
  private String[] s;
  private int head;

  public FixedCapacityStackOfStrings(int capacity) {
    s = new String[capacity];
    head = 0;
  }

  public void push(String item) {
    s[head ++] = item;
  }

  public String pop() {
    String item = s[-- head];
    /* avoid "loitering" */
    s[head] = null;
    return item;
  }

  public boolean isEmpty() {
    return head == 0;
  }
}
