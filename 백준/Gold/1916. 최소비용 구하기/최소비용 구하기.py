import sys
import heapq

input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]

for _ in range(m):
    src, dest, cost = map(int, input().split())
    graph[src].append((dest,cost))
    
start, end = map(int, input().split())

dists = [float('inf') for i in graph] 

q = []

def dijkstra(graph, start):
    dists[start] = 0
    heapq.heappush(q, [dists[start], start])

    while q:
        curr_dist, curr_dest = heapq.heappop(q)

        if dists[curr_dest] < curr_dist:
            continue

        for new_dest, new_dist in graph[curr_dest]:
            distance = curr_dist + new_dist
            if distance < dists[new_dest]:
                dists[new_dest] = distance
                heapq.heappush(q, [distance, new_dest])
    return dists

(dijkstra(graph, start))
print(dists[end])