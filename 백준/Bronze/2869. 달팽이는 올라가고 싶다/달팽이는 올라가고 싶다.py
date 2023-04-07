n = list(map(int, input().split()))
a = n[0]
b = n[1]
v = n[2]
d = 0
if (v-b) % (a-b) == 0:
    d = (v-b) / (a-b)
else: 
    d = (v-b-1) / (a-b) + 1
print(int(d))