import java.util.Arrays;

// weighted quick-union (with path compression)
public class WeightedQuickUnionUF {
  
  private int[] ids;

  private int[] weights;

  public WeightedQuickUnionUF(int N) {
    this.ids = new int[N];
    this.weights = new int[N];
    Arrays.fill(this.weights, 1);
    for (int i = 0; i < N; i ++) {
      this.ids[i] = i;
    }
  }

  public void union(int p, int q) {
    int i = root(p);
    int j = root(q);
    if (i == j) return;
    if (this.weights[i] < this.weights[j]) {
      this.ids[i] = j;
      this.weights[j] += this.weights[i];
    } else {
      this.ids[j] = i;
      this.weights[i] += this.weights[j];
    }
  }

  // public int find(int p, int q) {
  // }

  public int[] getIds() { return this.ids; }

  private int root(int i) {
    while (this.ids[i] != i) {
      // path compression
      this.ids[i] = this.ids[this.ids[i]];
      i = this.ids[i];
    }
    return i;
  }

  public static void main(String[] args) {
    WeightedQuickUnionUF uf = new WeightedQuickUnionUF(10);
    uf.union(4, 3);
    uf.union(3, 8);
    uf.union(6, 5);
    uf.union(9, 4);
    uf.union(2, 1);
    uf.union(5, 0);
    uf.union(7, 2);
    uf.union(6, 1);
    uf.union(7, 3);

    System.out.println(Arrays.toString(uf.getIds()));
  }
}
