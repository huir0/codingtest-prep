import sys
from queue import PriorityQueue
input = sys.stdin.readline
V , E = map(int, input().split())
k = int(input())
infinity = float('inf')
q = PriorityQueue()

adjacent = [[]for _ in range(V+1)]
visited = [False] * (V+1)
for i in range(E):
    u,v,w = map(int, input().split())
    adjacent[u].append((v,w))
dist = [infinity] * (V+1)
visited = [False]*(V+1)
dist[k] = 0
q.put((0,k))
while not q.empty():
    node = q.get()[1]
    visited[node] = True
    for i in adjacent[node]:
        distant = dist[node] + i[1]
        if dist[i[0]] > distant:
            dist[i[0]] = distant
            if not visited[i[0]]:
                q.put((distant , i[0]))
for i in range(1,V+1):
    if dist[i] == infinity:
        print("INF")
    else:
        print(dist[i])