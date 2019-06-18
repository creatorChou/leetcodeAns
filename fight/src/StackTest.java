import edu.princeton.cs.algs4.ResizingArrayStack;
import edu.princeton.cs.algs4.StdOut;
import p.week2.FixedCapacityStackOfStrings;
import p.week2.ResizingArrayStackOfStrings;
import p.week2.StackOfStrings;

class StackTest {
  private static String[] arr = {"to", "be", "or", "not", "to", "-", "be", "-", "-", "that", "-", "-", "-", "is"};

  static void tryStackOfStrings () {
    StackOfStrings stack = new StackOfStrings();
    for (String s : arr) {
      if (s.equals("-")) {
        if (!stack.isEmpty()) {
          StdOut.print(stack.pop() + " ");
        }
      } else {
        stack.push(s);
      }
    }
  }

  static void tryFixedCapacityStackOfStrings() {
    FixedCapacityStackOfStrings stack = new FixedCapacityStackOfStrings(arr.length);
    for (String s : arr) {
      if (s.equals("-")) {
        if (!stack.isEmpty()) {
          StdOut.print(stack.pop() + " ");
        }
      } else {
        stack.push(s);
      }
    }
  }

  static void tryResizingArrayStackOfStrings() {
    ResizingArrayStackOfStrings<String> stack = new ResizingArrayStackOfStrings<>();
    for (String s : arr) {
      if (s.equals("-")) {
        if (!stack.isEmpty()) {
          System.out.println("pop: " + stack.pop());
        }
      } else {
        stack.push(s);
        System.out.println("push: " + s);
      }
      System.out.println("size: " + stack.size());
    }
  }

  static void twoStackTest() {
    String exp = "((1+((2+3)*(4*53)))-1)";
    ResizingArrayStackOfStrings<Integer> numbers = new ResizingArrayStackOfStrings<>();
    ResizingArrayStackOfStrings<Character> operations = new ResizingArrayStackOfStrings<>();
    String num = "";
    for (int i=0; i<exp.length(); i++) {
      char c = exp.charAt(i);
      StdOut.print(c + " ");
      numbers.printStack();
      operations.printStack();
      if (c >= 48 && c <= 57) {
        num += c;
      } else {
        if (!num.equals("")) {
          numbers.push(Integer.parseInt(num));
          num = "";
        }
        if (c == '+' || c == '-' || c == '*') {
          operations.push(c);
        } else if (c == ')') {
          int num1 = numbers.pop();
          int num2 = numbers.pop();
          char operation = operations.pop();
          int result;
          switch (operation) {
            case '+':
              result = num1 + num2;
              break;
            case '-':
              result = num2 - num1;
              break;
            case '*':
              result = num1 * num2;
              break;
            default:
              result = 0;
              break;
          }
          numbers.push(result);
        }
      }
    }
    numbers.printStack();
  }

}
