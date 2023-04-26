import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n = int(input())

indoors = [int(i) for i in input().strip()]

visited = set()

graph = [[] for _ in range(n+1)]

for _ in range(1, n):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(graph, start, visited, indoors):
    cnt = 0
    visited.add(start)
    for neighbour in graph[start]:
        if neighbour not in visited:
            if indoors[neighbour-1]:
                cnt += 1
            else:
                cnt += dfs(graph, neighbour, visited, indoors)
    return cnt

def cnt_paths(graph, indoors):
    total_cnt = 0
    for start in range(len(indoors)):
        if indoors[start]:
            visited = set()
            total_cnt += dfs(graph, start+1, visited, indoors)
    return total_cnt

print(cnt_paths(graph, indoors))