import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
result = [0] * n
stack = []

for i in range(n):
    while stack and a[stack[-1]] < a[i]:
        stack.pop()
    if stack:
        result[i] = stack[-1] + 1
    stack.append(i)

print(' '.join(map(str, result)))