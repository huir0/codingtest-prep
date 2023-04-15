import sys
n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))


b = [1] * 1000
for i in range(1, n):
    for j in range(i):
        if a[i] > a[j]:
            b[i] = max(b[i], b[j]+1)
    
    
print(max(b))