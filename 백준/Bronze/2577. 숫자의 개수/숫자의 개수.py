numbers = []

for i in range(0,3):
    numbers.append(int(input()))

total = str(numbers[0] * numbers[1] * numbers[2])

for i in range(10):
    i = str(i)
    print(total.count(i))