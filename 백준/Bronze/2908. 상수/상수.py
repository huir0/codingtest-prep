numbers = list(map(str, input().split()))

a = numbers[0][2]+numbers[0][1]+numbers[0][0]
b = numbers[1][2]+numbers[1][1]+numbers[1][0]

if int(a) > int(b):
    print(a)
else: print(b)