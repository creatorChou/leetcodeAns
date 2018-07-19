#include <stdio.h>
#include <stdlib.h>

long combi(int, int);

void main(void) {
	int n, r;
	for (n = 0; n <= 5; n ++) {
		for (r = 0; r <= n ; r ++) {
			printf("%dC%d=%ld  ", n, r, combi(n, r));
		}
		printf("\n");
	}
	system("pause");
}

long combi(int n, int r) {
	long p = 1;
	int i;
	for (i = 1; i <= r; i ++) {
		p = p * (n - i + 1) / i;
	}

	return p;
}
