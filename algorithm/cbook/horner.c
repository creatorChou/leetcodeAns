#include <stdio.h>
#include <stdlib.h>

double fn(double *, double, int);

void main(void)
{
	double a[] = {1, 2, 3, 4, 5};
	int length = sizeof(a) / sizeof(a[0]);
	int x;
	for (x = 1; x <= 5; x ++) {
		printf("fn(%d)=%f\n", x, fn(a, x, length));
	}
	system("pause");
}

double fn(double coefficients[], double x, int len) {
	double p = coefficients[len - 1];
	for (int i = len - 2; i >= 0; i --) {
		p = p * x + coefficients[i];
	}
	return p;
}
