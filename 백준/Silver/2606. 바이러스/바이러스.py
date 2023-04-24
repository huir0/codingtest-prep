import sys
from collections import deque

input = sys.stdin.readline


def bfs(edges, v, visited):
    global sum
    queue = deque([v])
    visited[v] = True
    while queue:
        now = queue.popleft()
        
        for e in edges[now]:
            if not visited[e]:
                queue.append(e)
                visited[e] = True
                sum += 1
    return sum
    

n = int(input())
m = int(input())
edges = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    edges[a].append(b)
    edges[b].append(a)
for i in range(1, n + 1):
    edges[i].sort()
visited = [False] * (n + 1)

sum = -1
v = 1
bfs(edges, v, visited)
sum += 1
    
print(sum)