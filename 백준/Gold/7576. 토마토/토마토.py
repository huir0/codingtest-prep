import sys
from collections import deque

input = sys.stdin.readline

m, n = map(int, input().split())
q = deque([])

matrix = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

ans = 0

for i in range(n):
    for j in range(m):
        if matrix[i][j] == 1:
            q.append([i,j])

while q:
    x, y = q.popleft()
    for i in range(4):
        nx = dx[i] + x
        ny = dy[i] + y
        if 0 <= nx < n and 0 <= ny < m and matrix[nx][ny] == 0:
            matrix[nx][ny] = matrix[x][y] + 1
            q.append([nx,ny])

for i in matrix:
    for j in i:
        if j == 0:
            print(-1)
            exit(0)
    ans = max(ans, max(i))

print(ans - 1)