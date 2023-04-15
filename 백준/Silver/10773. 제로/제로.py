import sys

n = int(sys.stdin.readline())
stack = []
sum = 0
for i in range(n):
    a = int(sys.stdin.readline())
    if a != 0:
        stack.append(a)
        sum += a
    else:
        sum -= stack[-1]
        stack.pop(-1)
        

print(sum)