import sys

n = int(sys.stdin.readline())
cnt = 1
if n == 1:
    print(1)
else:
    a = []
    for i in range(1,n+1):
        a.append(i)

    while cnt <= len(a)-1:
        a.append(a[cnt])
        cnt += 2

    print(a[-1])