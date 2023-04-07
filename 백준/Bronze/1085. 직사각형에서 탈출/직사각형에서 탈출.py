n = input()
n = n.split(" ")

x = int(n[0])
y = int(n[1])
w = int(n[2])
h = int(n[3])
d1 = w - x
d2 = h - y
if x == w :
    print(0)
elif y == h :
    print(0)
elif x >= d1:
    if y >= d2:
        if d1 > d2:
            print(d2)
        else:
            print(d1)
    else:
        if d1 > y:
            print(y)
        else:
            print(d1)
else:
    if y > d2:
        if x > d2:
            print(d2)
        else:
            print(x)
    else:
        if x > y:
            print(y)
        else:
            print(x)