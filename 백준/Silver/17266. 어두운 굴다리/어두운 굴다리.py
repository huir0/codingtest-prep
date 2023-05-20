import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
x = list(map(int, input().split()))


height = max(x[0], n - x[-1])
for i in range(m-1):
    height = max(height, (x[i+1] - x[i] + 1) // 2)


print(height)