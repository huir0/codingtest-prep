import sys

input = sys.stdin.readline

n = int(input())

fl = [1, 1]

def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    for i in range(2, n):
        fl.append(fl[i-1] + fl[i-2])
    return fl
fibonacci(n)
print(fl[n-1])