import sys
n = int(sys.stdin.readline())
num = []

for i in range(n):
    num.append(int(sys.stdin.readline()))

for i in range(n):
    for j in range(n-1):
        if num[j] > num[j+1]:
            num[j], num[j+1] = num[j+1], num[j]

for i in num:
    print(i)     