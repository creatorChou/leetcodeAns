import java.util.Arrays;

class QuickUnionUF {

  private int ids[];

  public QuickUnionUF(int N) {
    this.ids = new int[N];
    for (int i = 0; i < N; i ++) {
      this.ids[i] = i;
    }
  }

  public void union(int p, int q) {
    int r1 = root(p);
    int r2 = root(q);
    this.ids[r1] = r2;
  }

  private int root(int i) {
    while (this.ids[i] != i) {
      i = this.ids[i];
    }
    return i;
  }

  public boolean connected(int p, int q) {
    return root(p) == root(q);
  }

  public int[] getIds() { return this.ids; };

  public static void main(String[] args) {
    QuickUnionUF uf1 = new QuickUnionUF(10);
    uf1.union(2, 9);
    uf1.union(3, 4);
    uf1.union(4, 9);
    uf1.union(5, 6);

    System.out.println(uf1.connected(3, 2));
    System.out.println(Arrays.toString(uf1.getIds()));

    QuickUnionUF uf2 = new QuickUnionUF(10);
    uf2.union(6, 5);
    uf2.union(5, 0);
    uf2.union(0, 1);
    uf2.union(2, 1);
    uf2.union(7, 1);
    uf2.union(1, 8);
    uf2.union(4, 3);
    uf2.union(3, 8);
    uf2.union(9, 8);

    System.out.println(uf2.connected(3, 2));
    System.out.println(Arrays.toString(uf2.getIds()));
  }
}