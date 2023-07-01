import sys
input = sys.stdin.readline

n = int(input())
line = list(map(str, input().strip()))
result = 0
for i in line:
    if i != "0":
        result += int(i)

print(result)