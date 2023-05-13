import sys
input = sys.stdin.readline

n = int(input())

def factorial(n):
    if n == 1:
        return 1
    n = n * factorial(n-1)
    return n

ans = 0
ans += n // 5
ans += n // 25
ans += n // 125
print(ans)
