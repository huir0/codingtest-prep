import sys, random
n = []
m = [0] * 7
for _ in range(9):
    n.append(int(sys.stdin.readline()))

while True:
    m[0], m[1], m[2], m[3], m[4], m[5], m[6] = random.sample(n, 7)
    summ = sum(m)
    if summ == 100:
        m.sort()
        break


for i in range(7):
    print(m[i])