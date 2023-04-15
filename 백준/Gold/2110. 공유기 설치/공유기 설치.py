import sys
n, c = map(int, sys.stdin.readline().split())
houses = [int(sys.stdin.readline()) for _ in range(n)]
houses.sort()

start = 1
end = houses[-1] - houses[0]
result = 0

while start <= end:
    mid = (start + end) // 2
    current = houses[0]
    count = 1
    
    for i in range(1, n):
        if houses[i] >= current + mid:
            count += 1
            current = houses[i]
        
    if count >= c:
        start = mid + 1
        result = mid
    else:
        end = mid -1
        
print(result)
