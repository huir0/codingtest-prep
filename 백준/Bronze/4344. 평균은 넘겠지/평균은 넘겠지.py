import sys

input = sys.stdin.readline

n = int(input())

l = list()
for i in range(n):
    l = list(map(int, input().split()))

    all = 0

    for i in range(1,l[0]+1):
        all += l[i]
    average = all / l[0]
    greater = 0
    for i in range(1, l[0]+1):
        if (l[i]>average):
            greater += 1

    percentage = greater / l[0] * 100
    print(f'{percentage:.3f}%')