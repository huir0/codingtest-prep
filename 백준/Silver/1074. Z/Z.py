import sys

n, r, c = map(int, sys.stdin.readline().split())
cnt = 0

def z(n,r,c):
    global cnt
    if n == -1:
        return cnt
    if r < 2 ** n and c < 2 ** n:
        cnt += (2 ** n) * (2 ** n) * 0
        z(n-1, r, c)
    elif r < 2 ** n and c >= 2 ** n:
        cnt += (2 ** n) * (2 ** n) * 1
        z(n-1, r, c-(2**n))
    elif r >= 2 ** n and c < 2 ** n:
        cnt += (2 ** n) * (2 ** n) * 2
        z(n-1, r-(2**n), c)
    else:
        cnt += (2 ** n) * (2 ** n) * 3
        z(n-1, r-(2**n), c-(2**n))
    

z(n,r,c)

print(cnt)
