import sys
input = sys.stdin.readline

s = int(input())

cnt = 0
i = 1
while s >= 0:
    s -= i
    cnt += 1
    if s < 0:
        cnt -= 1
        s += i
        if s > i:
            break
        else:
            s += i -1
            break
    i += 1
print(cnt)