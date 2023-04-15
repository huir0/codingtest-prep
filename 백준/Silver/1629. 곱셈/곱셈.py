import sys

A, B, C = map(int, sys.stdin.readline().split())
result = 1

while B > 0:
    if B % 2 == 1:
        result = (result * A) % C
    A = (A * A) % C
    B //= 2

print(result % C)