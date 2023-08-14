import sys
sys.setrecursionlimit(10**8)

input = sys.stdin.readline

n,m,r = map(int, input().split())
graph = [[] for _ in range(n+1)]
visited = [0 for _ in range(n+1)]
for _ in range(m):
    u,v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
stack = []
graph = list(map(lambda x:sorted(x),graph))
def dfs(r):
    visited[r] = 1
    stack.append(r)
    for i in graph[r]:
        if visited[i] == 0:
            dfs(i)
dfs(r)
for i in range(len(stack)):
    visited[stack[i]] = i + 1
for i in range(1,len(visited)):
    print(visited[i])