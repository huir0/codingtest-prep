import sys
n = int(sys.stdin.readline())

queue = []
cnt = 0
for i in range(n):
    a = list(map(str, sys.stdin.readline().split()))
    if a[0] == "push":
        queue.append(a[1])
    elif a[0] == "pop":
        if len(queue) - cnt == 0:
            print(-1)
        else:
            print(queue[cnt])
            cnt += 1
        
    elif a[0] == "size":
        print(len(queue)-cnt)
    elif a[0] == "empty":
        if len(queue) -cnt == 0:
            print(1)
        else:
            print(0)
    elif a[0] == "front":
        if len(queue) -cnt!= 0:
            print(queue[cnt])
        else:
            print(-1)
    elif a[0] == "back":
        if len(queue) -cnt != 0:
            print(queue[-1])
        else:
            print(-1)