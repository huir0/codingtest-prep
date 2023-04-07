n,x = map(int,input().split())
numbers = list(map(int, input().split()))
m = 0
p = []
for i in numbers:
    if i < x:
        p.append(i)
    if m == n-1:
        print(" ".join(map(str,p)))
    m = m + 1      