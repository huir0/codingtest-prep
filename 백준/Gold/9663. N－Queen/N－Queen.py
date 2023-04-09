import sys

n = int(sys.stdin.readline())

count = 0
dat = [0] * n
left = [0] * (n * 2 - 1)
right = [0] * (n * 2 - 1)

def queen(a:int) -> None:
    global count
    if a == n:
        count += 1
        return
    
    for i in range(n):
        if dat[i] == 1: continue
        if left[a+i] == 1: continue
        if right[a-i+n-1] == 1: continue

        dat[i] = 1
        left[a+i] = 1
        right[a-i+n-1] = 1

        queen(a+1)

        dat[i] = 0
        left[a+i] = 0
        right[a-i+n-1] = 0
        
queen(0)
print(count)