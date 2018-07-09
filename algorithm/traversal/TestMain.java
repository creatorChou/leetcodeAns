package traversal;

public class TestMain {
  public static void main(String[] args) {
//        A
//       / \
//      B   C
//     / \ / \
//    D  E F
    TreeNode A = new TreeNode("A");
    TreeNode B = new TreeNode("B");
    TreeNode C = new TreeNode("C");
    TreeNode D = new TreeNode("D");
    TreeNode E = new TreeNode("E");
    TreeNode F = new TreeNode("F");
    A.left = B;
    A.right = C;
    B.left = D;
    B.right = E;
    C.left = F;
//    PreOrder.traversal(A);
//    PreOrder.traversalWithStack(A);

//    InOrder.traversal(A);
//    InOrder.traversalWithStack(A);

    PostOrder.traversal(A);
    PostOrder.traversalWithStack(A);
  }
}
