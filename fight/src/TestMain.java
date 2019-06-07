import edu.princeton.cs.algs4.WeightedQuickUnionUF;
import p.week1.QuickFindUF;
import p.week1.QuickUnionUF;

import java.util.Arrays;

public class TestMain {
  public static void main(String[] args) {
//    tryQuickFindUF();
    tryQuickUnionUF();
    testJar();
  }

  private static void tryQuickFindUF() {
    QuickFindUF quickFindUF = new QuickFindUF(10);
    quickFindUF.union(5, 6);
    quickFindUF.union(0, 5);
    quickFindUF.union(2, 7);
    quickFindUF.union(1, 2);
    quickFindUF.union(3, 4);
    quickFindUF.union(4, 9);
    quickFindUF.union(8, 3);
    System.out.println("QuickFindUF:" + Arrays.toString(quickFindUF.id));
  }

  private static void tryQuickUnionUF() {
    QuickUnionUF quickUnionUF = new QuickUnionUF(10);
    quickUnionUF.union(5, 6);
    quickUnionUF.union(0, 5);
    quickUnionUF.union(2, 7);
    quickUnionUF.union(1, 2);
    quickUnionUF.union(3, 4);
    quickUnionUF.union(4, 9);
    quickUnionUF.union(8, 3);
    System.out.println("QuickUnionUF:" + Arrays.toString(quickUnionUF.id));
    System.out.println("group count:" + quickUnionUF.getGroupCount());
  }

  private static void testJar() {
    WeightedQuickUnionUF weightedQuickUnionUF = new WeightedQuickUnionUF(10);
    weightedQuickUnionUF.union(5, 6);
    weightedQuickUnionUF.union(0, 5);
    weightedQuickUnionUF.union(2, 7);
    weightedQuickUnionUF.union(1, 2);
    weightedQuickUnionUF.union(3, 4);
    weightedQuickUnionUF.union(4, 9);
    weightedQuickUnionUF.union(8, 3);
    System.out.println("QuickUnionUF:" + weightedQuickUnionUF.toString());
    System.out.println("group count:" + weightedQuickUnionUF.count());
  }
}
