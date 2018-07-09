package traversal;

import java.util.Stack;

public class PreOrder {
  public static void traversal (TreeNode treeNode) {
    if (treeNode != null) {
      System.out.println("TreeNode:" + treeNode.val);
      traversal(treeNode.left);
      traversal(treeNode.right);
    }
  }

  public static void traversalWithStack (TreeNode treeNode) {
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode node = treeNode;
    while (node != null) {
      System.out.println("TreeNode:" + node.val);
      if (node.left != null) {
        if (node.right != null) {
          stack.push(node);
        }
        node = node.left;
      } else {
        if (!stack.isEmpty()) {
          node = stack.pop().right;
        } else {
          node = null;
        }
      }
    }
  }
}
