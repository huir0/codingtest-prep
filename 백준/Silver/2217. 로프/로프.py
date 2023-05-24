import sys
input = sys.stdin.readline

n = int(input())
ropes = []
for _ in range(n):
    ropes.append(int(input()))

ropes.sort()

max_weight = ropes[-1]
for i in range(n):
    max_weight = max(ropes[-i] * i, max_weight)
max_weight = max(ropes[0] * n, max_weight)
print(max_weight)