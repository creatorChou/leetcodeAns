package p.week1;

public class QuickFindUF {

  public int[] id;

  /**
   * QuickFindUF.
   * @param n sum of ids.
   */
  public QuickFindUF(int n) {
    id = new int[n];
    for (int i = 0; i < n; i++) {
      id[i] = i;
    }
  }

  /**
   * union.
   * @param p id index
   * @param q id index
   */
  public void union(int p, int q) {
    int k = id[p];
    int j = id[q];
    if (k == j) {
      return;
    }
    for (int i = 0; i < id.length; i++) {
      if (id[i] == j) {
        id[i] = k;
      }
    }
  }

  public boolean connected(int p, int q) {
    return id[p] == id[q];
  }

}
