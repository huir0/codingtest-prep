n = str(input())
if len(n) <= 2:
    count = n
elif len(n) == 3:
    count = 99
    for a in range(111, int(n)+1):
        a = str(a)
        if (int(a[0]) + int(a[2])) / 2 == int(a[1]):
            count += 1
else: count = 144
print(count)
