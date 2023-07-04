import sys
input = sys.stdin.readline

n, m = map(int, input().split())

a = list(map(int, input().split()))
b = list(map(int, input().split()))
c = set(a+b)
print(n+m-(2*(n+m-len(c))))