import sys

n = int(sys.stdin.readline())

stack = [(int(sys.stdin.readline().strip())) for _ in range(n)]

max = stack[-1]
result = 1

for i in range(len(stack)-1,-1,-1):
    if stack[i] > max:
        result += 1
        max = stack[i]

print(result)