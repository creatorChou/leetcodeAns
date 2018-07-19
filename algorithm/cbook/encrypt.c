#include <stdio.h>
#include <stdlib.h>

void main(void) {
	char table[] = {
		'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
		'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
		'Z', 'X', 'C', 'V', 'B', 'N', 'M', '?'
	};
	char *ango = "KSOIDHEPZ", *p;
	int index;
	p = ango;
	while(*p != '\0') {
		index = 'A' <= *p && *p <= 'Z' ? *p - 'A' : 26;
		putchar(table[index]);
		p ++;
	}
	printf("\n");
	system("pause");
}
