package p.week1;

import java.util.Arrays;

public class QuickUnionUF {

  public int[] id;
  /* weighted */
  private  int[] sz;

  public QuickUnionUF(int N) {
    id = new int[N];
    sz = new int[N];
    Arrays.fill(sz, 1);
    for (int i = 0; i < N; i++) {
      id[i] = i;
    }
  }

  public void union(int p, int q) {
    int rootP = find(p);
    int rootQ = find(q);
    if (rootP == rootQ) return;
    if (sz[rootP] > sz[rootQ]) {
      id[rootQ] = rootP;
      sz[rootP] += sz[rootQ];
    } else {
      id[rootP] = rootQ;
      sz[rootQ] += sz[rootP];
    }
  }

  private int find(int p) {
    while(id[p] != p) {
      /* path compression */
      id[p] = id[id[p]];
      p = id[p];
    }
    return p;
  }

  public int getGroupCount() {
    int count = 0;
    for (int i = 0; i < id.length; i++) {
      if(id[i] == i) count++;
    }
    return count;
  }
}
