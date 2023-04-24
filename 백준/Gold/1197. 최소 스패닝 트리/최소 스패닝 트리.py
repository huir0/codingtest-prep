import sys
n,e = map(int,sys.stdin.readline().split())
edges = []
for _ in range(e):
    edges.append(list(map(int, sys.stdin.readline().split())))

edges.sort(key=lambda x: x[2])

parent = [i for i in range(n+1)]

def find(v):
    if parent[v] != v:
        parent[v] = find(parent[v])
    return parent[v]

def union(u, v):
    root1 = find(u)
    root2 = find(v)
    if root1 != root2:
        parent[root1] = root2

mst_weight = 0
for edge in edges:
    u, v, w = edge
    if find(u) != find(v):
        union(u, v)
        mst_weight += w

print(mst_weight)