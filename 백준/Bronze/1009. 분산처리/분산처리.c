#include <stdio.h>
#include <stdlib.h>
int testcase() {
    
    int j, n, m = 0;
    
    scanf("%d %d", &n, &m);
    int lastdigit = n % 10;
    for(j=0;j<m-1;j++) lastdigit = (lastdigit * n) % 10;
    if (lastdigit == 0) lastdigit = 10;
    return lastdigit;

}


int main() {
    int *t = (int*)malloc(sizeof(int));
    scanf("%d", t);
    int i = 0;
    for (i=0;i<*t;i++)    printf("%d\n", testcase());
    return 0;
}