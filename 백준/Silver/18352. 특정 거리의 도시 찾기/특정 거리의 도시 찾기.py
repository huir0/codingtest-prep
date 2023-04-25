import sys
from collections import deque
input = sys.stdin.readline  

n, m, k, v= map(int, input().split())

cities = [[] for _ in range(n+1)]

for _ in range(m):
	a, b = map(int, input().split())
	cities[a].append(b)

for i in range(1, n+1):
	cities[i].sort()

q = deque([v])
visited = [0] * (n+1)
visited[v] = 1
k_cities = []

while q:
	curr = q.popleft()	
	if cities[curr] is not None:	
		for i in cities[curr]:	
			if visited[i] == 0:			
				q.append(i)				
				visited[i] = visited[curr] + 1						
				if visited[i] == k+1:
					k_cities.append(i)

if len(k_cities) == 0:
	print(-1)

else:
	for city in sorted(k_cities):
		print(city)