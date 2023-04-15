import sys

n = int(sys.stdin.readline())

a = list(map(int, sys.stdin.readline().split()))
a.sort()

start = 0
end = len(a) -1
result = sys.maxsize

while start < end:
    absolute = a[start] + a[end]
    
    if abs(absolute) <= abs(result):
        result = a[start]+a[end]
        two = f"{a[start]} {a[end]}"
    if absolute < 0:   
        start += 1
    elif absolute > 0:
        end -= 1
    else:
        break

print(two)