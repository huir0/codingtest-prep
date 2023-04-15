import sys
n = int(sys.stdin.readline())

stack = []

for i in range(n):
    a = list(map(str, sys.stdin.readline().split()))
    if a[0] == "push":
        stack.append(a[1])
    elif a[0] == "pop":
        if len(stack) == 0:
            print(-1)
        else:
            print(stack[-1])
            stack.pop(-1)
        
    elif a[0] == "size":
        print(len(stack))
    elif a[0] == "empty":
        if len(stack) == 0:
            print(1)
        else:
            print(0)
    elif a[0] == "top":
        if len(stack) != 0:
            print(stack[-1])
        else:
            print(-1)