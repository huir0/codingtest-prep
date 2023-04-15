import sys

n = int(sys.stdin.readline())

for i in range(n):
    stack = []
    a = list(map(str, sys.stdin.readline().strip()))
    
    for j in range(len(a)):
        if len(stack) == 0:
            stack.append(a[j])
        
        elif a[j] == ")" and stack[-1] == "(":
            stack.pop(-1)
        
        else:
            stack.append(a[j])
    
    
    if len(stack) == 0:
        print("YES")
    else:
        print("NO")