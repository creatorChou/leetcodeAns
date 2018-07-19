#include <stdio.h>
#include <stdlib.h>

int fibonacci(int);

void main(void) {
	for (int i = 1; i < 10; ++i) {
		printf("fibonacci(%d)=%d\n", i, fibonacci(i));
	}
	system("pause");
}

int fibonacci(int x) {
	if (x > 2) {
		return fibonacci(x - 1) + fibonacci(x - 2);
	} else {
		return 1;
	}
}
