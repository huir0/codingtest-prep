n = int(input())
for i in range(n):
    a = list(input().split())
    b = [int(a[0]) * a[1][j] for j in range(len(a[1]))]

    c = ''
    for i in b:
        c += i
    print(c)