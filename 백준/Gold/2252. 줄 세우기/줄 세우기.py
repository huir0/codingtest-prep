import sys
from collections import deque

input = sys.stdin.readline
n, m = map(int, input().split())

students, order = [0] * (n+1), [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    students[b] += 1
    order[a].append(b)
q = deque([])


for i in range(1,n+1):
    if students[i] == 0:
        q.append(i)

while q:
    v = q.popleft()
    print(v)
    if order[v] != []:
        for i in range(len(order[v])):
            x = order[v][i]
            students[x] -= 1
            if students[x] == 0:
                q.append(x)
