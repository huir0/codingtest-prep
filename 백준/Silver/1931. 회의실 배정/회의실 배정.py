import sys
input = sys.stdin.readline

n = int(input())
times = [list(map(int, input().split())) for _ in range(n)]

times.sort(key= lambda x: (x[1],x[0]))

reserved = times[0]
cnt = 1
for i in range(1, n):
    
    if reserved[1] <= times[i][0]:
        reserved = times[i]
        cnt += 1

print(cnt)