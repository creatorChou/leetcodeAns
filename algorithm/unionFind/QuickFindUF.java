import java.util.Arrays;

class QuickFindUF {

  int id[];

  QuickFindUF (int N) {
    this.id = new int[N];
    for (int i = 0; i < N; i ++) {
      this.id[i] = i;
    }
  }

  void union (int p, int q) {
    if (connected(p, q)) return;
    int g = this.id[q];
    for (int i = 0; i < this.id.length; i ++) {
      if (this.id[i] == g) {
        this.id[i] = this.id[p];
      }
    }
  }

  boolean connected (int p, int q) {
    return this.id[p] == this.id[q];
  }

  int find (int p) {
    return 0;
  }

  int count () {
    return 0;
  }

  public static void main (String[] args) {
    QuickFindUF uf = new QuickFindUF(10);
    System.out.println(Arrays.toString(uf.id));
    uf.union(0, 5);
    uf.union(1, 6);
    uf.union(2, 1);
    uf.union(5, 6);
    uf.union(7, 2);

    uf.union(3, 8);
    uf.union(3, 4);
    uf.union(4, 9);

    System.out.println(Arrays.toString(uf.id));
  }

}
