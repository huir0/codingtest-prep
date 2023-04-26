import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
m = int(input())

components = [[] for _ in range(n+1)]
cnt = [0 for _ in range(n+1)]
need = [[0] * (n+1) for _ in range(n+1)]

for _ in range(m):
    a, b, c  = map(int, input().split())
    components[b].append([a,c])
    cnt[a] += 1

q = deque([n])

for i in range(1, n+1):
    if cnt[i] == 0:
        q.append(i)
        need[i][i] = 1



while q:
    v = q.popleft()
    for x, y in components[v]:
        for i in range(1, n+1):
            need[x][i] += need[v][i] * y
        cnt[x] -= 1
        if cnt[x] == 0:
            q.append(x)

for i in range(1, n+1):
    if need[n][i]:
        print(i, need[n][i])        