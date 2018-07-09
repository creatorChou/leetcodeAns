package traversal;

import java.util.Stack;

public class PostOrder {
  public static void traversal (TreeNode treeNode) {
    if (treeNode != null) {
      traversal(treeNode.left);
      traversal(treeNode.right);
      System.out.println(treeNode.val);
    }
  }

  public static void traversalWithStack (TreeNode treeNode) {
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode node = treeNode;
    // push twice every time
    stack.push(node);
    stack.push(node);
    while (!stack.isEmpty()) {
      node = stack.pop();
      // if node equals to the top of stack, change it to its children
      if (!stack.isEmpty() && node == stack.peek()) {
        if (node.right != null) {
          stack.push(node.right);
          stack.push(node.right);
        }
        if (node.left != null) {
          stack.push(node.left);
          stack.push(node.left);
        }
      } else {
        System.out.println(node.val);
      }
    }
  }
}
