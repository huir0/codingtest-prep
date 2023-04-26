import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())

    
def dfs(start,n):
    color[start] = n
    for i in graph[start]:
        if color[i] == 0:
            if dfs(i, -n):
                pass
            else:
                return False
        elif color[i] == color[start]:
            return False
    return True

for _ in range(n):
    v, e = map(int, input().split())
    graph = [[] for _ in range(v+1)]
    color = [0 for _ in range(v+1)]

    for _ in range(e):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)

    bipartite = True
    for i in range(1, v+1):
        if color[i] == 0:
            bipartite = dfs(i,-1)
            if not bipartite:
                break
    
    if bipartite:
        print("YES")
    else:
        print('NO')