import sys

num = int(sys.stdin.readline())
x = [0] * 10001

for i in range(num):
    n = int(sys.stdin.readline())
    x[n] += 1

k = 0
while k <= 10000:
    if x[k] != 0:
        for _ in range(x[k]):
            print(k) 
    k += 1