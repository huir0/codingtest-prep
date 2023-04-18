import sys

m,n,l = map(int, sys.stdin.readline().split())

ms = list(map(int, sys.stdin.readline().split()))
animals = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

ms.sort()

cnt = 0

for a,b in animals:
    start = 0
    end = m - 1
    while start <= end:
        mid = (start + end) // 2
        if ms[mid] < a + b - l:
            start = mid + 1
        elif ms[mid] > a - b + l:
            end = mid - 1
        else:
            cnt += 1
            break

print(cnt)