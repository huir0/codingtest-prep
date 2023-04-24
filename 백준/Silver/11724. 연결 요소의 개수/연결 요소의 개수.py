import sys
from collections import deque

input = sys.stdin.readline

def bfs(edges, v, visited):
    queue = deque([v])
    visited[v] = True
    while queue:
        now = queue.popleft()
        
        for e in edges[now]:
            if not visited[e]:
                queue.append(e)
                visited[e] = True
                basket.append(e)
    return basket
    

n, m = map(int, input().split())
edges = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    edges[a].append(b)
    edges[b].append(a)
for i in range(1, n + 1):
    edges[i].sort()
visited = [False] * (n + 1)

sum = 0
basket = []
for v in range(1,n+1):
    if not v in basket:
        bfs(edges, v, visited)
        sum += 1
    
print(sum)