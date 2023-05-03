import sys
input = sys.stdin.readline

n = int(input())
N = list(map(int, input().split()))

nge = [-1] * n
stack = []

for i in range(n):
    while stack and N[stack[-1]] < N[i]:
        nge[stack.pop()] = N[i]
    stack.append(i)

print(*nge)