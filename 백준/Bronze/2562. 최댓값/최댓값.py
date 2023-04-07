n = []
maximum = 0
a = 0

for i in range(0,9):
    n.append(int(input()))


for i in range(0, 9) :
    if n[i] > maximum:
        maximum = n[i]
        a = i + 1
    if i == 8:
        print(maximum, a)