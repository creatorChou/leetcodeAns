package traversal;

import java.util.Stack;

public class InOrder {
  public static void traversal (TreeNode treeNode) {
    if (treeNode != null) {
      traversal(treeNode.left);
      System.out.println("TreeNode:" + treeNode.val);
      traversal(treeNode.right);
    }
  }

  public static void traversalWithStack (TreeNode treeNode) {
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode node = treeNode;
    while (node != null || !stack.isEmpty()) {
      if (node != null) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        System.out.println("TreeNode:" + node.val);
        node = node.right;
      }
    }
  }
}
